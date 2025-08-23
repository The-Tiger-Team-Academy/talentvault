from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.institution import Institution, InstitutionCreate, InstitutionUpdate, InstitutionWithDepartments
from app.services.institution import institution_service
from config.database import get_db

router = APIRouter(prefix="/institutions", tags=["institutions"])

@router.get("/", response_model=List[Institution])
def read_institutions(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    verified_only: bool = False
):
    """
    Retrieve institutions.
    """
    if verified_only:
        institutions = institution_service.get_verified(db, skip=skip, limit=limit)
    else:
        institutions = institution_service.get_multi(db, skip=skip, limit=limit)
    return institutions

@router.post("/", response_model=Institution)
def create_institution(
    *,
    db: Session = Depends(get_db),
    institution_in: InstitutionCreate,
):
    """
    Create new institution.
    """
    institution = institution_service.get_by_email(db, email=institution_in.email)
    if institution:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An institution with this email already exists.",
        )
    institution = institution_service.create(db, obj_in=institution_in)
    return institution

@router.get("/{institution_id}", response_model=InstitutionWithDepartments)
def read_institution(
    institution_id: int,
    db: Session = Depends(get_db),
):
    """
    Get institution by ID.
    """
    institution = institution_service.get(db, institution_id=institution_id)
    if not institution:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Institution not found",
        )
    return institution

@router.put("/{institution_id}", response_model=Institution)
def update_institution(
    *,
    db: Session = Depends(get_db),
    institution_id: int,
    institution_in: InstitutionUpdate,
):
    """
    Update institution.
    """
    institution = institution_service.get(db, institution_id=institution_id)
    if not institution:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Institution not found",
        )
    institution = institution_service.update(db, db_obj=institution, obj_in=institution_in)
    return institution

@router.delete("/{institution_id}", response_model=Institution)
def delete_institution(
    *,
    db: Session = Depends(get_db),
    institution_id: int,
):
    """
    Delete institution.
    """
    institution = institution_service.get(db, institution_id=institution_id)
    if not institution:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Institution not found",
        )
    institution = institution_service.delete(db, id=institution_id)
    return institution

@router.post("/{institution_id}/verify", response_model=Institution)
def verify_institution(
    *,
    db: Session = Depends(get_db),
    institution_id: int,
):
    """
    Verify an institution.
    """
    institution = institution_service.verify_institution(db, institution_id=institution_id)
    if not institution:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Institution not found",
        )
    return institution
