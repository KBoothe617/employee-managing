import inquirer from 'inquirer';
import { getDepartments, getRoles, getEmployees, newDepartment, newRole, newEmployee, updateEmployeeRole } from './queries.js';

const menu = async () => {
    let exit = false;

    while (!exit) {
        const { option } = await inquirer.prompt({
            name: 'option',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                //view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role',
                'Exit'
            ]
        });

    switch (option) {
        case 'View All Departments':
            const departments = await getDepartments();
            console.log("You have selected View All Departments");
            console.table(departments);
            break;

        case 'View All Roles':
            const roles = await getRoles();
            console.log("You have selected View All Roles");
            console.table(roles);
            break;

        case 'View All Employees':
            const employees = await getEmployees();
            console.log("You have selected View All Employees");
            console.table(employees);
            break;

        case 'Add A Department':
            const departmentAdd = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the department?',
                },
            ]);
            try {
                const department = await newDepartment(departmentAdd.name);
                if (department) {
                    console.log('Department ' + departmentAdd.name + ' added successfully');
                } else {
                    console.log('Department already exists');
                }
            } catch (error) {
                console.log(error);
            }
            break;

        case 'Add A Role':
            const rollAdd = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the title of the role?',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the salary of the role?',
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'What is the department id of the role?',
                },
            ]);
            try {
                const role = await newRole(rollAdd.title, rollAdd.salary, rollAdd.department_id);
                if (role) {
                    console.log('Role ' + rollAdd.title + ' added successfully');
                } else {
                    console.log('Role already exists');
                }
            } catch (error) {
                console.log(error);
            }
            break;

        case 'Add An Employee':
            const employeeAdd = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'What is the first name of the employee?',
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'What is the last name of the employee?',
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'What is the role id of the employee?',
                },
                {
                    type: 'input',
                    name: 'manager_id',
                    message: 'What is the manager id of the employee?',
                },
            ]);
            try {
                const employee = await newEmployee(employeeAdd.first_name, employeeAdd.last_name, employeeAdd.role_id, employeeAdd.manager_id);
                if (employee) {
                    console.log('Employee ' + employeeAdd.first_name + ' ' + employeeAdd.last_name + ' added successfully');
                } else {
                    console.log('Employee already exists');
                }
            } catch (error) {
                console.log(error);
            }
            break;

        case 'Update An Employee Role':
            const employeeUpdate = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'employee_id',
                    message: 'What is the id of the employee?',
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'What is the role id of the employee?',
                },
            ]);
            try {
                const employee = await updateEmployeeRole(employeeUpdate.employee_id, employeeUpdate.role_id);
                if (employee) {
                    console.log('Employee ' + employeeUpdate.employee_id + ' updated successfully');
                } else {
                    console.log('Employee already has that role');
                }
            } catch (error) {
                console.log(error);
            }
            break;

        case 'Exit':
            exit = true;
            console.log('Goodbye!');
            break;
    }
    await menu();
    }
};
menu();