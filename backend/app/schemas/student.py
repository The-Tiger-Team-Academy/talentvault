from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional, List

class StudentBase(BaseModel):
    student_id: str
    first_name: str
    last_name: str
    email: EmailStr
    year_of_study: int = Field(..., ge=1, le=8)
    gpa: float = Field(..., ge=0.0, le=4.0)
    expected_graduation: datetime
    resume_url: Optional[str] = None
    institution_id: int
    department_id: int

class StudentCreate(StudentBase):
    pass

class StudentUpdate(StudentBase):
    pass

class StudentInDBBase(StudentBase):
    id: int
    user_id: Optional[int] = None
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class Student(StudentInDBBase):
    pass

# For academic records
class AcademicRecordBase(BaseModel):
    semester: str
    course_code: str
    course_name: str
    credits: int
    grade: str
    grade_point: float
    notes: Optional[str] = None

class AcademicRecordCreate(AcademicRecordBase):
    student_id: int

class AcademicRecord(AcademicRecordBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class StudentWithAcademicRecords(Student):
    academic_records: List[AcademicRecord]
