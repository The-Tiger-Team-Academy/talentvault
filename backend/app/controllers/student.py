from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.student import Student, StudentCreate, StudentUpdate, AcademicRecordCreate, AcademicRecord, StudentWithAcademicRecords
from app.services.student import student_service
from config.database import get_db

router = APIRouter(prefix="/students", tags=["students"])

@router.get("/", response_model=List[Student])
def read_students(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    institution_id: int = None,
    department_id: int = None,
):
    """
    Retrieve students.
    """
    if institution_id:
        students = student_service.get_by_institution(db, institution_id=institution_id, skip=skip, limit=limit)
    elif department_id:
        students = student_service.get_by_department(db, department_id=department_id, skip=skip, limit=limit)
    else:
        students = student_service.get_multi(db, skip=skip, limit=limit)
    return students

@router.post("/", response_model=Student)
def create_student(
    *,
    db: Session = Depends(get_db),
    student_in: StudentCreate,
):
    """
    Create new student.
    """
    student = student_service.get_by_student_id(db, student_id=student_in.student_id)
    if student:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A student with this student ID already exists.",
        )
    student = student_service.get_by_email(db, email=student_in.email)
    if student:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A student with this email already exists.",
        )
    student = student_service.create(db, obj_in=student_in)
    return student

@router.get("/{student_id}", response_model=StudentWithAcademicRecords)
def read_student(
    student_id: int,
    db: Session = Depends(get_db),
):
    """
    Get student by ID.
    """
    student = student_service.get(db, student_id=student_id)
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found",
        )
    return student

@router.put("/{student_id}", response_model=Student)
def update_student(
    *,
    db: Session = Depends(get_db),
    student_id: int,
    student_in: StudentUpdate,
):
    """
    Update student.
    """
    student = student_service.get(db, student_id=student_id)
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found",
        )
    student = student_service.update(db, db_obj=student, obj_in=student_in)
    return student

@router.delete("/{student_id}", response_model=Student)
def delete_student(
    *,
    db: Session = Depends(get_db),
    student_id: int,
):
    """
    Delete student.
    """
    student = student_service.get(db, student_id=student_id)
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found",
        )
    student = student_service.delete(db, id=student_id)
    return student

@router.post("/{student_id}/academic-records", response_model=AcademicRecord)
def add_academic_record(
    *,
    db: Session = Depends(get_db),
    student_id: int,
    record_in: AcademicRecordCreate,
):
    """
    Add academic record for a student.
    """
    student = student_service.get(db, student_id=student_id)
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found",
        )
    record = student_service.add_academic_record(db, record_in=record_in)
    return record

@router.get("/{student_id}/academic-records", response_model=List[AcademicRecord])
def read_academic_records(
    student_id: int,
    db: Session = Depends(get_db),
):
    """
    Get academic records for a student.
    """
    student = student_service.get(db, student_id=student_id)
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found",
        )
    records = student_service.get_academic_records(db, student_id=student_id)
    return records
