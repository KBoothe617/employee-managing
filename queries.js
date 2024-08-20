import pool from './connection.js';

export const getDepartments = async () => {
    const result = await pool.query('SELECT * FROM department');
    return result.rows;
}