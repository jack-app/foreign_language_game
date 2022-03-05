from typing import Optional, List

from pydantic import BaseModel, Field


class Request(BaseModel):
    language: Optional[str] = Field(None, description="問題の言語")
    type: Optional[str] = Field(None, description="問題のタイプ")
    words: List[str] = Field(None, description="問題に使用する単語")
    
