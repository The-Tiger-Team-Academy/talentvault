from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ProfileBase(BaseModel):
    avatar_url: Optional[str] = None
    availability: Optional[str] = None  # immediate, 2weeks, 1month, open

class ProfileCreate(ProfileBase):
    user_id: int

class ProfileUpdate(ProfileBase):
    pass

class ProfileInDBBase(ProfileBase):
    id: int
    user_id: int
    last_active: datetime
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class Profile(ProfileInDBBase):
    pass
