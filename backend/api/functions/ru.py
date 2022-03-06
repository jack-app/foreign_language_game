# from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from api.schemas.generate import Generate as gen_schema
from api.schemas.ru import Schema_noun_gender, QAO

import pymorphy2


gender = {
    "femn": "女性名詞",
    "masc": "男性名詞",
    "neut": "中性名詞",
}


def noun_gender(words: List[str])-> Schema_noun_gender:
    morph = pymorphy2.MorphAnalyzer()
    q_and_a = list()
    for w in words:
        # 解析をおこなう
        w_parsed = morph.parse(w)
        # 一つの単語(w)に複数の品詞を持つ場合がある
        for p in w_parsed:
            # 名詞かつ性別のタグがある場合
            if ("NOUN" in p.tag) and (p.tag.gender):
                normal_form =  p.normal_form if p.normal_form else w
                q_and_a.append(QAO(q=[normal_form], a=gender[p.tag.gender], ordinal=w))
                break
    return Schema_noun_gender(q_and_a=q_and_a)

# 問題のデータをgen_schemeに合わせた形に整形する
def format_gen_scheme(func: Schema_noun_gender)-> List[gen_schema]:
    meta = {
        "language": "ru",
        "questionType": "choices",
    }
    i = 0 # id用
    qa_list=list()
    q_schema = gen_schema.Question
    for qa in func.q_and_a:
        # 答えになりうる集合から正解を取り除く
        wrong_choices = [w for w in gender.values()if w != qa.a] #set(func.choices) - set([qa.a])
        # gen_schemaを作る
        gen = gen_schema(meta=meta,
                    question = q_schema(
                            id=i,
                            q_sentence=func.q_sentence,
                            q_variable=qa.q,
                            choices={
                                "correct": qa.a, # 正解
                                "wrong": wrong_choices
                            },
                            ordinal_word=qa.ordinal
                    )
        )
        
        i+=1
        qa_list.append(gen)
    return qa_list


