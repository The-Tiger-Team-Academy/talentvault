import pytest
from sqlalchemy.orm import Session
from app.services.institution import institution_service
from app.schemas.institution import InstitutionCreate, InstitutionUpdate

def test_create_institution(db: Session):
    email = "test@university.ac.th"
    name = "Test University"
    institution_in = InstitutionCreate(
        email=email,
        name=name,
        location="Bangkok, Thailand",
        website="https://test.university.ac.th",
        phone="+66123456789"
    )
    institution = institution_service.create(db, obj_in=institution_in)
    assert institution.email == email
    assert institution.name == name
    assert not institution.is_verified

def test_verify_institution(db: Session):
    email = "test-verify@university.ac.th"
    name = "Test Verify University"
    institution_in = InstitutionCreate(
        email=email,
        name=name,
        location="Bangkok, Thailand"
    )
    institution = institution_service.create(db, obj_in=institution_in)
    assert not institution.is_verified
    
    verified_institution = institution_service.verify_institution(db, institution_id=institution.id)
    assert verified_institution.is_verified

def test_update_institution(db: Session):
    email = "test-update@university.ac.th"
    name = "Test Update University"
    institution_in = InstitutionCreate(
        email=email,
        name=name,
        location="Bangkok, Thailand"
    )
    institution = institution_service.create(db, obj_in=institution_in)
    
    new_name = "Updated Test University"
    new_location = "Chiang Mai, Thailand"
    institution_update = InstitutionUpdate(
        email=email,  # email should not change
        name=new_name,
        location=new_location
    )
    updated_institution = institution_service.update(db, db_obj=institution, obj_in=institution_update)
    assert updated_institution.name == new_name
    assert updated_institution.location == new_location
    assert updated_institution.email == email  # email should not change
