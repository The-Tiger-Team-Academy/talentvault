from typing import List, Optional
from sqlalchemy.orm import Session
from app.repositories.student import student_repository
from app.schemas.student import StudentCreate, StudentUpdate, Student, AcademicRecordCreate
from app.models.academic_record import AcademicRecord

class StudentService:
    def get(self, db: Session, student_id: int) -> Optional[Student]:
        return student_repository.get(db=db, id=student_id)

    def get_by_student_id(self, db: Session, student_id: str) -> Optional[Student]:
        return student_repository.get_by_student_id(db=db, student_id=student_id)

    def get_by_email(self, db: Session, email: str) -> Optional[Student]:
        return student_repository.get_by_email(db=db, email=email)

    def get_multi(self, db: Session, *, skip: int = 0, limit: int = 100) -> List[Student]:
        return student_repository.get_multi(db=db, skip=skip, limit=limit)

    def get_by_institution(self, db: Session, *, institution_id: int, skip: int = 0, limit: int = 100) -> List[Student]:
        return student_repository.get_by_institution(db=db, institution_id=institution_id, skip=skip, limit=limit)

    def get_by_department(self, db: Session, *, department_id: int, skip: int = 0, limit: int = 100) -> List[Student]:
        return student_repository.get_by_department(db=db, department_id=department_id, skip=skip, limit=limit)

    def create(self, db: Session, *, obj_in: StudentCreate) -> Student:
        return student_repository.create(db=db, obj_in=obj_in)

    def update(self, db: Session, *, db_obj: Student, obj_in: StudentUpdate) -> Student:
        return student_repository.update(db=db, db_obj=db_obj, obj_in=obj_in)

    def delete(self, db: Session, *, id: int) -> Student:
        return student_repository.delete(db=db, id=id)

    def add_academic_record(self, db: Session, *, record_in: AcademicRecordCreate) -> AcademicRecord:
        db_record = AcademicRecord(**record_in.model_dump())
        db.add(db_record)
        db.commit()
        db.refresh(db_record)
        return db_record

    def get_academic_records(self, db: Session, *, student_id: int) -> List[AcademicRecord]:
        return db.query(AcademicRecord).filter(AcademicRecord.student_id == student_id).all()

student_service = StudentService()
