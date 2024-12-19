from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()

@app.post("/chat")
async def chat():
    return {"message": "Hello, this is AIRA!"}

handler = Mangum(app)
