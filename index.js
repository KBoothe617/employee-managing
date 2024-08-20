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

    }
    }
}