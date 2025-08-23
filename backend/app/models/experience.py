from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from config.database import Base

class Experience(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    company = Column(String)
    location = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime, nullable=True)
    description = Column(Text)
    type = Column(String)  # full-time, part-time, contract, etc.
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    user = relationship("User", back_populates="experiences")
    achievements = relationship("Achievement", back_populates="experience")
    technologies = relationship("ExperienceTechnology", back_populates="experience")
