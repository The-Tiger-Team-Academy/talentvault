from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
import pytest
from datetime import datetime

def test_create_institution(client: TestClient, db: Session):
    data = {
        "name": "Test University",
        "email": "test@university.ac.th",
        "location": "Bangkok, Thailand",
        "website": "https://test.university.ac.th",
        "phone": "+66123456789",
        "description": "A leading research university"
    }
    response = client.post("/institutions/", json=data)
    assert response.status_code == 200
    content = response.json()
    assert content["email"] == data["email"]
    assert content["name"] == data["name"]
    assert "id" in content
    institution_id = content["id"]

    response = client.get(f"/institutions/{institution_id}")
    assert response.status_code == 200
    content = response.json()
    assert content["email"] == data["email"]
    assert content["name"] == data["name"]
    assert not content["is_verified"]

def test_create_institution_existing_email(client: TestClient, db: Session):
    data = {
        "name": "Test University",
        "email": "test-existing@university.ac.th",
        "location": "Bangkok, Thailand"
    }
    response = client.post("/institutions/", json=data)
    assert response.status_code == 200

    response = client.post("/institutions/", json=data)
    assert response.status_code == 400
    assert response.json()["detail"] == "An institution with this email already exists."

def test_verify_institution(client: TestClient, db: Session):
    # First create an institution
    data = {
        "name": "Test Verify University",
        "email": "test-verify@university.ac.th",
        "location": "Bangkok, Thailand"
    }
    response = client.post("/institutions/", json=data)
    assert response.status_code == 200
    institution_id = response.json()["id"]

    # Then verify it
    response = client.post(f"/institutions/{institution_id}/verify")
    assert response.status_code == 200
    content = response.json()
    assert content["is_verified"]

def test_update_institution(client: TestClient, db: Session):
    # First create an institution
    data = {
        "name": "Test Update University",
        "email": "test-update@university.ac.th",
        "location": "Bangkok, Thailand"
    }
    response = client.post("/institutions/", json=data)
    assert response.status_code == 200
    institution_id = response.json()["id"]

    # Then update it
    update_data = {
        "name": "Updated Test University",
        "location": "Chiang Mai, Thailand",
        "description": "Updated description"
    }
    response = client.put(f"/institutions/{institution_id}", json=update_data)
    assert response.status_code == 200
    content = response.json()
    assert content["name"] == update_data["name"]
    assert content["location"] == update_data["location"]
    assert content["email"] == data["email"]  # Email should not change
