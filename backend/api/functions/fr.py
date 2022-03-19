from typing import List
from api.schemas.generate import Generate as gen_schema
from api.schemas.fr import QAO, Schema_noun_gender_fr
import spacy
from spacy_lefff import LefffLemmatizer
from spacy.language import Language


gender = {
    "Fem": "女性名詞",
    "Masc": "男性名詞",
    "None": "なし"
}


@Language.factory('french_lemmatizer')
def create_french_lemmatizer(nlp, name):
    return LefffLemmatizer()


def fr_noun_gender(words: List[str]):
    nlp = spacy.load('fr_core_news_sm')
    nlp.add_pipe('french_lemmatizer', name='lefff')
    doc = nlp(' '.join(words))
    a_list = []
    for d in doc:
        if "Masc" in str(d.morph):
            a_list.append(QAO(q=[d.text], a=gender["Masc"], ordinal=d.text))
        elif "Fem" in str(d.morph):
            a_list.append(QAO(q=[d.text], a=gender["Fem"], ordinal=d.text))
        else:
            a_list.append(QAO(q=[d.text], a=gender["None"], ordinal=d.text))
    return Schema_noun_gender_fr(q_and_a=a_list)


def gen_schema_fr(q_and_a: Schema_noun_gender_fr) -> List[gen_schema]:
    meta = {
        "language": "fr",
        "questionType": "choices",
    }
    i = 0  # id用
    qa_list = list()
    q_schema = gen_schema.Question
    for qa in q_and_a.q_and_a:
        print(qa.q, qa.a, qa.ordinal)
        wrong_choices = [w for w in gender.values()if w != qa.a]
        # gen_schemaを作る
        gen = gen_schema(meta=meta,
                         question=q_schema(
                             id=i,
                             q_sentence=q_and_a.q_sentence,
                             q_variable=qa.q,
                             choices={
                                 "correct": qa.a,  # 正解
                                 "wrong": wrong_choices
                             },
                             ordinal_word=qa.ordinal
                         )
                         )

        i += 1
        qa_list.append(gen)
    return qa_list
# listw = ['parisien', 'actuel', 'sportif']
# a = fr_noun_gender(listw)
# print(a)
