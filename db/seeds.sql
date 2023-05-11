INSERT INTO department (id, name)
VALUES (001, "Administration"),
        (002, "Finance"),
        (003, "Human Resources"),
        (004, "Customer Service"),
        (005, "Marketing"),
        (006, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "receptionist", 50000, 001),
        (2, "administrative director", 100000, 001),
        (3, "accountant", 100000, 002),
        (4, "payroll manager", 90000, 002),
        (5, "recruiter", 65000, 003),
        (6, "HR administrator", 95000, 003),
        (7, "customer service associate", 35000, 004),
        (8, "customer service manager", 65000, 004),
        (9, "social media manager", 75000, 005),
        (10, "creative director", 110000, 005),
        (11, "sales representative", 70000, 006),
        (12, "sales manager", 95000, 006);

INSERT INTO employee (id, first_name, role_id, manager_id)
VALUES (1, "Allison", 1, 0),
        (2, "Claire", 2, 1),
        (3, "Charlie", 3, 0),
        (4, "Samuel", 4, 1),
        (5, "David", 5, 0),
        (6, "Debra", 6, 1),
        (7, "Eugene", 7, 0),
        (8, "Hank", 8, 1),
        (9, "Jennifer", 9, 0),
        (10, "Steven", 10, 1),
        (11, "Frank", 11, 0),
        (12, "Elizabeth", 12, 1);



