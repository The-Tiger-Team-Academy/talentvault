from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
import pytest

def test_create_user(client: TestClient, db: Session):
    data = {
        "email": "test@example.com",
        "password": "testpassword123",
        "full_name": "Test User",
        "title": "Software Engineer",
        "location": "Bangkok, Thailand",
        "summary": "Experienced software engineer",
        "experience_years": 5
    }
    response = client.post("/users/", json=data)
    assert response.status_code == 200
    content = response.json()
    assert content["email"] == data["email"]
    assert content["full_name"] == data["full_name"]
    assert "id" in content
    user_id = content["id"]

    response = client.get(f"/users/{user_id}")
    assert response.status_code == 200
    content = response.json()
    assert content["email"] == data["email"]
    assert content["full_name"] == data["full_name"]

def test_create_user_existing_email(client: TestClient, db: Session):
    data = {
        "email": "test-existing@example.com",
        "password": "testpassword123",
        "full_name": "Test User"
    }
    response = client.post("/users/", json=data)
    assert response.status_code == 200

    response = client.post("/users/", json=data)
    assert response.status_code == 400
    assert response.json()["detail"] == "The user with this email already exists in the system."

def test_read_users(client: TestClient, db: Session):
    response = client.get("/users/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_read_user_not_found(client: TestClient, db: Session):
    response = client.get("/users/999999")
    assert response.status_code == 404
    assert response.json()["detail"] == "User not found"

def test_update_user(client: TestClient, db: Session):
    # First create a user
    user_data = {
        "email": "test-update@example.com",
        "password": "testpassword123",
        "full_name": "Test User"
    }
    response = client.post("/users/", json=user_data)
    assert response.status_code == 200
    user_id = response.json()["id"]

    # Then update the user
    update_data = {
        "full_name": "Updated Test User",
        "title": "Senior Software Engineer"
    }
    response = client.put(f"/users/{user_id}", json=update_data)
    assert response.status_code == 200
    content = response.json()
    assert content["full_name"] == update_data["full_name"]
    assert content["title"] == update_data["title"]
    assert content["email"] == user_data["email"]  # Email should not change

def test_delete_user(client: TestClient, db: Session):
    # First create a user
    user_data = {
        "email": "test-delete@example.com",
        "password": "testpassword123",
        "full_name": "Test User"
    }
    response = client.post("/users/", json=user_data)
    assert response.status_code == 200
    user_id = response.json()["id"]

    # Then delete the user
    response = client.delete(f"/users/{user_id}")
    assert response.status_code == 200

    # Verify user is deleted
    response = client.get(f"/users/{user_id}")
    assert response.status_code == 404
