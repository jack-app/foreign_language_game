from typing import Optional, NamedTuple, List

from pydantic import BaseModel, Field

class QAO(NamedTuple):# Question, Answer, Ordinal
    q: List[str]
    a: str
    ordinal: str
    
class Schema_noun_gender_fr(BaseModel):
    q_sentence: Optional[str] = Field(default="{}の性は？", description="問題本文")
    q_and_a: List[tuple] = Field(None, description="問題の変数と答えの組")
    choices: List[str] = Field(
        default=["女性名詞", "男性名詞"], description="答えの選択肢")
    ordinal_word: List[str] = Field(None, description="送られてきたデータ")
