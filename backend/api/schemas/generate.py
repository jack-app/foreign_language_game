from typing import Optional, List

from pydantic import BaseModel, Field

# shemeではデータ型を定義する 

# メインの定義
class Generate(BaseModel):
    # 問題セットに共通するデータ
    class Meta(BaseModel):
        language: Optional[str] = Field(None, description="問題の言語")
        questionType: Optional[str] = Field(None, description="問題の種類")
        #questionTemplate: Optional[str] = Field(None, description="問題のテンプレ")

    # 問題ごとに違うデータ
    class Question(BaseModel):
        # 問題の選択肢
        class Choices(BaseModel):
            correct: Optional[str] = Field(None, description="正解")
            wrong: list[str] = Field(None, description="不正解")
            
        id: int = Field(None, description="問題Id")
        q_sentence: Optional[str] = Field(None, description="問題文")
        q_variable: List[str] = Field(None, description="問題の変数")
        choices: Optional[Choices] = Field(None, description="選択肢")
        ordinal_word: Optional[str] = Field(None, description="もともと受け取ったデータ")
        
    meta: Optional[Meta] = Field(None, description="メタ情報")
    question: Optional[Question] = Field(None, description="問題の内容")

"""
# 返すjsonのサンプル
{[
    {
        "meta": {
            "language": "ru",
            "questionType": "3choice",
            "questionTemplate": "{}の{}は？"
        },
        "question": {
            "id": 1,
            "question": "{}の{}は？",
            "choices": {
                "correct": "hoge",
                "wrong": ["hoge1", "hoge2", "hoge3"]
            }
        }
    }
]}
"""