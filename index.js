import inquirer from 'inquirer';

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


    }
    }
}