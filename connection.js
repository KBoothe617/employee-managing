import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { Pool } = pg;


const pool = new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432,
});

export default pool;