from typing import List, Optional
from sqlalchemy.orm import Session
from app.repositories.institution import institution_repository
from app.schemas.institution import InstitutionCreate, InstitutionUpdate, Institution

class InstitutionService:
    def get(self, db: Session, institution_id: int) -> Optional[Institution]:
        return institution_repository.get(db=db, id=institution_id)

    def get_by_email(self, db: Session, email: str) -> Optional[Institution]:
        return institution_repository.get_by_email(db=db, email=email)

    def get_multi(self, db: Session, *, skip: int = 0, limit: int = 100) -> List[Institution]:
        return institution_repository.get_multi(db=db, skip=skip, limit=limit)

    def get_verified(self, db: Session, *, skip: int = 0, limit: int = 100) -> List[Institution]:
        return institution_repository.get_verified(db=db, skip=skip, limit=limit)

    def create(self, db: Session, *, obj_in: InstitutionCreate) -> Institution:
        return institution_repository.create(db=db, obj_in=obj_in)

    def update(self, db: Session, *, db_obj: Institution, obj_in: InstitutionUpdate) -> Institution:
        return institution_repository.update(db=db, db_obj=db_obj, obj_in=obj_in)

    def delete(self, db: Session, *, id: int) -> Institution:
        return institution_repository.delete(db=db, id=id)

    def verify_institution(self, db: Session, *, institution_id: int) -> Optional[Institution]:
        return institution_repository.verify_institution(db=db, institution_id=institution_id)

institution_service = InstitutionService()
