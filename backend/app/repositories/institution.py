from typing import List, Optional
from sqlalchemy.orm import Session
from app.models.institution import Institution
from app.schemas.institution import InstitutionCreate, InstitutionUpdate
from .base import BaseRepository

class InstitutionRepository(BaseRepository[Institution, InstitutionCreate, InstitutionUpdate]):
    def get_by_email(self, db: Session, *, email: str) -> Optional[Institution]:
        return db.query(Institution).filter(Institution.email == email).first()
    
    def get_verified(self, db: Session, *, skip: int = 0, limit: int = 100) -> List[Institution]:
        return db.query(Institution).filter(Institution.is_verified == True).offset(skip).limit(limit).all()
    
    def verify_institution(self, db: Session, *, institution_id: int) -> Optional[Institution]:
        institution = self.get(db, id=institution_id)
        if institution:
            institution.is_verified = True
            db.add(institution)
            db.commit()
            db.refresh(institution)
        return institution

institution_repository = InstitutionRepository(Institution)
