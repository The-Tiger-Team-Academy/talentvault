from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from config.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    title = Column(String)
    location = Column(String)
    summary = Column(String)
    experience_years = Column(Integer)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    experiences = relationship("Experience", back_populates="user")
    skills = relationship("UserSkill", back_populates="user")
    credentials = relationship("Credential", back_populates="user")
    profile = relationship("Profile", back_populates="user", uselist=False)
