INSERT INTO department (name) VALUES ('Accounting');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Legal');
INSERT INTO department (name) VALUES ('Sales');

INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 60000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Engineer', 80000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', 100000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kaleb', 'Boothe', 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Doe', 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jim', 'Smith', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jill', 'Smith', 1, 4);

