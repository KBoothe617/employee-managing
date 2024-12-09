import { pool } from './connection.js';

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

export const departmentAdd = async (name) => {
    try {
        const checkQuery = await pool.query('SELECT * FROM department WHERE name = $1', [name]);
        const checkResult = await pool.query(checkQuery, [name]);

        if (checkResult.rows.length > 0) {
            console.log('Department already exists');
            return null;
        }

        const result = await pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const roleAdd = async (title, salary, department_id) => {
    const result = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]);
    return result.rows[0];
}

export const employeeAdd = async (first_name, last_name, role_id, manager_id) => {
    const result = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id]);
    return result.rows[0];
}

export const updateEmployeeRole = async (employee_id, role_id) => {
    const result = await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [role_id, employee_id]);
    return result.rows[0];
}