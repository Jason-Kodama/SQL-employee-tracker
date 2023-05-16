INSERT INTO department (name)
VALUES ("Administration"),
        ("Finance"),
        ("Human Resources"),
        ("Customer Service"),
        ("Marketing"),
        ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("receptionist", 50000, 001),
        ("administrative director", 100000, 001),
        ("accountant", 100000, 002),
        ("payroll manager", 90000, 002),
        ("recruiter", 65000, 003),
        ("HR administrator", 95000, 003),
        ("customer service associate", 35000, 004),
        ("customer service manager", 65000, 004),
        ("social media manager", 75000, 005),
        ("creative director", 110000, 005),
        ("sales representative", 70000, 006),
        ("sales manager", 95000, 006);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Allison", "Wonderland", 1, null),
        ("Claire", "Danes", 2, 1),
        ("Charlie", "Chaplin", 3, null),
        ("Samuel", "Jackson", 4, 3),
        ("David", "Letterman", 5, null),
        ("Debra", "Powers", 6, 5),
        ("Eugene", "Kim", 7, null),
        ("Hank", "Aaron", 8, 7),
        ("Jennifer", "Aniston", 9, null),
        ("Steven", "Adams", 10, 9),
        ("Frank", " Ocean", 11, null),
        ("Elizabeth", "Hurley", 12, 11);



