import inquirer from 'inquirer';

const menu = async () => {
    let exit = false;

    while (!exit) {
        const { option } = await inquirer.prompt({
            name: 'option',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'Add Department',
                'Delete Department',
                'View Employees by Department',
                'Update Employee Department',
                'View All Roles',
                'Add Role',
                'Delete Role',
                'Update Employee Role',
                'View All Employees',
                'Add Employee',
                'Delete Employee',
                'View Employee by Manager',
                'Update Employee Manager',
                'View Combined Salaries',
                'Exit'
            ]
        })
    }
}