from fastapi import APIRouter
from typing import List

from api.schemas.generate import Generate as gen_schema
from api.schemas.request import Request as rq_schema
from api.functions.ru import noun_gender, format_gen_scheme
router = APIRouter()

@router.post("/api/generate", response_model=List[gen_schema])
async def generate_questions(rq: rq_schema)-> gen_schema:
    if rq.language == "ru":
        if rq.type == "choice":
            return format_gen_scheme(noun_gender(rq.words))
    
    elif rq.language == "fr":
        if rq.type == "":
            pass