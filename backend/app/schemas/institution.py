from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

class InstitutionBase(BaseModel):
    name: str
    description: Optional[str] = None
    location: Optional[str] = None
    website: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    logo_url: Optional[str] = None

class InstitutionCreate(InstitutionBase):
    pass

class InstitutionUpdate(InstitutionBase):
    pass

class InstitutionInDBBase(InstitutionBase):
    id: int
    is_verified: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class Institution(InstitutionInDBBase):
    pass

# For returning nested department data
class DepartmentBrief(BaseModel):
    id: int
    name: str
    head_of_department: str

    class Config:
        from_attributes = True

class InstitutionWithDepartments(Institution):
    departments: List[DepartmentBrief]
