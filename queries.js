import pool from './connection.js';

export const getDepartments = async () => {
    const result = await pool.query('SELECT * FROM department');
    return result.rows;
}

export const getRoles = async () => {
    const result = await pool.query('SELECT * role.id, role.title, role.salary, department.id FROM role JOIN department ON role.department_id = department.id');
    return result.rows;
}

export const getEmployees = async () => {
    const result = await pool.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, \' \', manager.last_name) AS manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id');
    return result.rows;
}