import pool from './connection.js';

export const getDepartments = async () => {
    const result = await pool.query('SELECT * FROM department');
    return result.rows;
}

export const getRoles = async () => {
    const result = await pool.query('SELECT * role id, title, salary, department FROM role');
    return result.rows;
}

