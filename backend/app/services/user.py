from typing import Optional
from sqlalchemy.orm import Session
from app.repositories.user import user_repository
from app.schemas.user import UserCreate, UserUpdate, User
from app.core.security import get_password_hash, verify_password

class UserService:
    def get(self, db: Session, user_id: int) -> Optional[User]:
        return user_repository.get(db=db, id=user_id)

    def get_by_email(self, db: Session, email: str) -> Optional[User]:
        return user_repository.get_by_email(db=db, email=email)

    def get_multi(self, db: Session, skip: int = 0, limit: int = 100):
        return user_repository.get_multi(db=db, skip=skip, limit=limit)

    def create(self, db: Session, obj_in: UserCreate) -> User:
        db_obj = UserCreate(
            email=obj_in.email,
            full_name=obj_in.full_name,
            title=obj_in.title,
            location=obj_in.location,
            summary=obj_in.summary,
            experience_years=obj_in.experience_years,
            hashed_password=get_password_hash(obj_in.password)
        )
        return user_repository.create(db=db, obj_in=db_obj)

    def update(self, db: Session, db_obj: User, obj_in: UserUpdate) -> User:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.model_dump(exclude_unset=True)
        if update_data.get("password"):
            hashed_password = get_password_hash(update_data["password"])
            del update_data["password"]
            update_data["hashed_password"] = hashed_password
        return user_repository.update(db=db, db_obj=db_obj, obj_in=update_data)

    def delete(self, db: Session, id: int) -> User:
        return user_repository.delete(db=db, id=id)

    def authenticate(self, db: Session, email: str, password: str) -> Optional[User]:
        user = self.get_by_email(db, email=email)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user

    def is_active(self, user: User) -> bool:
        return user_repository.is_active(user)

user_service = UserService()
