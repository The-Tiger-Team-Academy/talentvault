from typing import List, Optional
from sqlalchemy.orm import Session
from app.models.student import Student
from app.schemas.student import StudentCreate, StudentUpdate
from .base import BaseRepository

class StudentRepository(BaseRepository[Student, StudentCreate, StudentUpdate]):
    def get_by_student_id(self, db: Session, *, student_id: str) -> Optional[Student]:
        return db.query(Student).filter(Student.student_id == student_id).first()
    
    def get_by_email(self, db: Session, *, email: str) -> Optional[Student]:
        return db.query(Student).filter(Student.email == email).first()
    
    def get_by_institution(self, db: Session, *, institution_id: int, skip: int = 0, limit: int = 100) -> List[Student]:
        return db.query(Student).filter(Student.institution_id == institution_id).offset(skip).limit(limit).all()
    
    def get_by_department(self, db: Session, *, department_id: int, skip: int = 0, limit: int = 100) -> List[Student]:
        return db.query(Student).filter(Student.department_id == department_id).offset(skip).limit(limit).all()
    
    def get_active_students(self, db: Session, *, skip: int = 0, limit: int = 100) -> List[Student]:
        return db.query(Student).filter(Student.is_active == True).offset(skip).limit(limit).all()

student_repository = StudentRepository(Student)
