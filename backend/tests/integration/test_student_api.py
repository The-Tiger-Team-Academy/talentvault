from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
import pytest
from datetime import datetime, timedelta

def test_create_student(client: TestClient, db: Session):
    data = {
        "student_id": "6411234567",
        "email": "test@student.university.ac.th",
        "first_name": "Test",
        "last_name": "Student",
        "year_of_study": 2,
        "gpa": 3.50,
        "expected_graduation": (datetime.now() + timedelta(days=365*2)).isoformat(),
        "institution_id": 1,
        "department_id": 1
    }
    response = client.post("/students/", json=data)
    assert response.status_code == 200
    content = response.json()
    assert content["email"] == data["email"]
    assert content["student_id"] == data["student_id"]
    assert "id" in content
    student_id = content["id"]

    response = client.get(f"/students/{student_id}")
    assert response.status_code == 200
    content = response.json()
    assert content["email"] == data["email"]
    assert content["student_id"] == data["student_id"]
    assert content["is_active"]

def test_create_student_existing_id(client: TestClient, db: Session):
    data = {
        "student_id": "6411234568",
        "email": "test-existing@student.university.ac.th",
        "first_name": "Test",
        "last_name": "Student",
        "year_of_study": 2,
        "gpa": 3.50,
        "expected_graduation": (datetime.now() + timedelta(days=365*2)).isoformat(),
        "institution_id": 1,
        "department_id": 1
    }
    response = client.post("/students/", json=data)
    assert response.status_code == 200

    response = client.post("/students/", json=data)
    assert response.status_code == 400
    assert response.json()["detail"] == "A student with this student ID already exists."

def test_add_academic_record(client: TestClient, db: Session):
    # First create a student
    student_data = {
        "student_id": "6411234569",
        "email": "test-academic@student.university.ac.th",
        "first_name": "Test",
        "last_name": "Student",
        "year_of_study": 2,
        "gpa": 3.50,
        "expected_graduation": (datetime.now() + timedelta(days=365*2)).isoformat(),
        "institution_id": 1,
        "department_id": 1
    }
    response = client.post("/students/", json=student_data)
    assert response.status_code == 200
    student_id = response.json()["id"]

    # Add academic record
    record_data = {
        "student_id": student_id,
        "semester": "1/2024",
        "course_code": "CS101",
        "course_name": "Introduction to Computer Science",
        "credits": 3,
        "grade": "A",
        "grade_point": 4.0
    }
    response = client.post(f"/students/{student_id}/academic-records", json=record_data)
    assert response.status_code == 200
    content = response.json()
    assert content["course_code"] == record_data["course_code"]
    assert content["grade"] == record_data["grade"]

    # Get academic records
    response = client.get(f"/students/{student_id}/academic-records")
    assert response.status_code == 200
    content = response.json()
    assert len(content) == 1
    assert content[0]["course_code"] == record_data["course_code"]
