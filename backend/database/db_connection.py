import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    conn = psycopg2.connect(
        dbname="disaster_db",
        user="your_db_user",
        password="your_password",
        host="localhost",
        port=5432
    )
    return conn
