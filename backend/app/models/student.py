from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey, Text, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from config.database import Base

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)  # Optional link to user account
    institution_id = Column(Integer, ForeignKey("institutions.id"))
    department_id = Column(Integer, ForeignKey("departments.id"))
    student_id = Column(String, unique=True, index=True)  # รหัสนักศึกษา
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True, index=True)
    year_of_study = Column(Integer)
    gpa = Column(Float)
    expected_graduation = Column(DateTime)
    resume_url = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    institution = relationship("Institution", back_populates="students")
    department = relationship("Department", back_populates="students")
    user = relationship("User", backref="student_profile", uselist=False)
    academic_records = relationship("AcademicRecord", back_populates="student")
    skills = relationship("StudentSkill", back_populates="student")
