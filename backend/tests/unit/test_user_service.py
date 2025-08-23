import pytest
from sqlalchemy.orm import Session
from app.services.user import user_service
from app.schemas.user import UserCreate, UserUpdate
from app.models.user import User

def test_create_user(db: Session):
    email = "test@example.com"
    password = "testpassword123"
    full_name = "Test User"
    user_in = UserCreate(
        email=email,
        password=password,
        full_name=full_name,
    )
    user = user_service.create(db, obj_in=user_in)
    assert user.email == email
    assert user.full_name == full_name
    assert hasattr(user, "hashed_password")

def test_authenticate_user(db: Session):
    email = "test-auth@example.com"
    password = "testpassword123"
    user_in = UserCreate(
        email=email,
        password=password,
        full_name="Test Auth User",
    )
    user = user_service.create(db, obj_in=user_in)
    authenticated_user = user_service.authenticate(db, email=email, password=password)
    assert authenticated_user
    assert user.email == authenticated_user.email

def test_not_authenticate_user(db: Session):
    email = "test-auth-fail@example.com"
    password = "testpassword123"
    user = user_service.authenticate(db, email=email, password=password)
    assert user is None

def test_check_if_user_is_active(db: Session):
    email = "test-active@example.com"
    password = "testpassword123"
    user_in = UserCreate(
        email=email,
        password=password,
        full_name="Test Active User",
    )
    user = user_service.create(db, obj_in=user_in)
    is_active = user_service.is_active(user)
    assert is_active is True

def test_update_user(db: Session):
    email = "test-update@example.com"
    password = "testpassword123"
    user_in = UserCreate(
        email=email,
        password=password,
        full_name="Test Update User",
    )
    user = user_service.create(db, obj_in=user_in)
    new_password = "newtestpassword123"
    user_in_update = UserUpdate(
        password=new_password,
        full_name="New Test Update User",
    )
    user2 = user_service.update(db, db_obj=user, obj_in=user_in_update)
    assert user2.full_name == "New Test Update User"
    assert user2.email == email  # email should not change
    assert user_service.authenticate(db, email=email, password=new_password)
