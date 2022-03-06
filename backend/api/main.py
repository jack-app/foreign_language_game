from fastapi import FastAPI
from api.routers import generate, health
app = FastAPI()

app.include_router(generate.router)
app.include_router(health.router)


@app.get("/hello")
async def hello():
    return {"message": "hello world!"}