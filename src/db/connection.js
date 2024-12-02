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

const connectToDB = async () => {
    try {
        await pool.connect();
        console.log('Connected to the data base');
    } catch (error) {
        console.log('Error connecting to the database', error);
        process.exit(1);
    }
}

export { pool, connectToDB };