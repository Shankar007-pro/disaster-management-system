FROM python:3.11-slim

WORKDIR /app

COPY ./backend /app/backend
COPY ./backend/requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python", "backend/api/app.py"]
