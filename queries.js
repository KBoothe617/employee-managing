import pool from './connection.js';

export const getDepartments = async () => {
    const result = await pool.query('SELECT * FROM department');
    return result.rows;
}

export const getRoles = async () => {
    const result = await pool.query('SELECT * role.id, role.title, role.salary, department.id FROM role JOIN department ON role.department_id = department.id');
    return result.rows;
}

