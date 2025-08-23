import pytest
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from app.services.student import student_service
from app.schemas.student import StudentCreate, StudentUpdate, AcademicRecordCreate

def test_create_student(db: Session):
    student_id = "6411234567"
    email = "test@student.university.ac.th"
    student_in = StudentCreate(
        student_id=student_id,
        email=email,
        first_name="Test",
        last_name="Student",
        year_of_study=2,
        gpa=3.50,
        expected_graduation=datetime.now() + timedelta(days=365*2),
        institution_id=1,
        department_id=1
    )
    student = student_service.create(db, obj_in=student_in)
    assert student.student_id == student_id
    assert student.email == email
    assert student.is_active

def test_update_student(db: Session):
    student_id = "6411234568"
    email = "test-update@student.university.ac.th"
    student_in = StudentCreate(
        student_id=student_id,
        email=email,
        first_name="Test",
        last_name="Student",
        year_of_study=2,
        gpa=3.50,
        expected_graduation=datetime.now() + timedelta(days=365*2),
        institution_id=1,
        department_id=1
    )
    student = student_service.create(db, obj_in=student_in)
    
    new_gpa = 3.75
    student_update = StudentUpdate(
        student_id=student_id,  # should not change
        email=email,  # should not change
        first_name="Updated Test",
        last_name="Updated Student",
        year_of_study=3,
        gpa=new_gpa,
        expected_graduation=datetime.now() + timedelta(days=365),
        institution_id=1,
        department_id=1
    )
    updated_student = student_service.update(db, db_obj=student, obj_in=student_update)
    assert updated_student.gpa == new_gpa
    assert updated_student.year_of_study == 3
    assert updated_student.student_id == student_id  # should not change
    assert updated_student.email == email  # should not change

def test_add_academic_record(db: Session):
    # First create a student
    student_in = StudentCreate(
        student_id="6411234569",
        email="test-academic@student.university.ac.th",
        first_name="Test",
        last_name="Student",
        year_of_study=2,
        gpa=3.50,
        expected_graduation=datetime.now() + timedelta(days=365*2),
        institution_id=1,
        department_id=1
    )
    student = student_service.create(db, obj_in=student_in)
    
    # Add academic record
    record_in = AcademicRecordCreate(
        student_id=student.id,
        semester="1/2024",
        course_code="CS101",
        course_name="Introduction to Computer Science",
        credits=3,
        grade="A",
        grade_point=4.0
    )
    record = student_service.add_academic_record(db, record_in=record_in)
    assert record.student_id == student.id
    assert record.course_code == "CS101"
    assert record.grade == "A"
    assert record.grade_point == 4.0
    
    # Get academic records
    records = student_service.get_academic_records(db, student_id=student.id)
    assert len(records) == 1
    assert records[0].course_code == "CS101"
