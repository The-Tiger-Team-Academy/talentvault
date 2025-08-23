from fastapi import FastAPI
from app.controllers import user, institution, student
from config.database import Base, engine

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Job Seeker API",
    description="API for Job Seeker Platform",
    version="1.0.0"
)

# Include routers
app.include_router(user.router)
app.include_router(institution.router)
app.include_router(student.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Job Seeker API"}