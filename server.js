const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


    
db.connect((error) => {
        if(error) throw error;
        promptUser()
});

const promptUser = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Please select an option',
            choices: [
                'View All Departments',
                'View All Roles', 
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add an Employee',
                'Update Employee Role'
            ]
        }
    ])
        .then((answers) => {
            if (answers.choices === 'View All Departments') {
                viewDepartment();
            }
            if(answers.choices === 'View All Roles') {
                viewRole();
            }
            if(answers.choices === 'View All Employees') {
                viewEmployee();
            }
            if(answers.choices === 'Add Department') {
                addDepartment();
            }
            if(answers.choices === 'Add Role'){
                addRole();
            }
            if(answers.choices === 'Add Employee') {
                addEmployee();
            }
})
}
const viewDepartment = () => {
    db.promise().query('SELECT id, name FROM department')
                .then(([rows]) => {
                    console.table(rows);
                }).catch (err => {
                    console.error(err);
                })
                .finally(()=> {
                    promptUser()
                })
}
 const viewRole = () => {
    db.promise().query('SELECT * FROM role')
                .then(([rows]) => {
                    console.table(rows);
                }).catch (err => {
                    console.error(err);
                })
                .finally(()=> {
                    promptUser()
                })
 }
const viewEmployee = () => {
    db.promise().query('SELECT * FROM employee')
                .then(([rows]) => {
                    console.table(rows);
                }).catch (err => {
                    console.error(err);
                })
                .finally(()=> {
                    promptUser()
                })
}
const addDepartment = () => {
    inquirer.prompt ([
        {
            name: 'name',
            type: 'input',
            message: 'Please enter a department name'
        }
    ]).then((answers) => {
        db.query(`INSERT INTO department (name) VALUES ("${answers.name.trim()}")`)
        console.log('Successful entry')
    }) 
}
const addRole = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of this role?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a role name");
            return false;
          };
        }
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
        validate: salaryInput => {
          if (isNaN(salaryInput)) {
            console.log("Please enter a salary");
            return false;
          } else {
            return true;
          };
        }
      }
    ])
    .then (answer => {
      const params = [answer.title, answer.salary];
      const sql = `SELECT * FROM department`;
      db.query(sql, (err, rows) => {
        if (err) {
          throw err;
        }
        const departments = rows.map(({name, id}) => ({name: name, value: id}));
        inquirer.prompt([
          {
            type: "list",
            name: "department",
            message: "What department does this role belong to?",
            choices: departments
          }
        ])
        .then(departmentAnswer => {
          const department = departmentAnswer.department;
          params.push(department);
          const sql = `INSERT INTO role (title, salary, department_id)
            VALUES (?, ?, ?)`;
          db.query(sql, params, (err) => {
            if (err) {
              throw err;
            }
            console.log("Role added!");
            return viewRole();
          });
        });
      });
    });
  };
const addEmployee = () => {
    inquirer.prompt ([
        {
            name: 'firstName',
            type: 'input',
            message: 'Please enter employee first name'
        }
    ]).then((answers) => {
        db.query(`INSERT INTO employee (first_name) VALUES ("${answers.name.trim()}")`)
        console.log('Successful entry')
    });
    inquirer.prompt ([
        {
            name: 'lastName',
            type: 'input',
            message: 'Please enter employee last name.'
        }
    ]).then((answers) => {
        db.query(`INSERT INTO employee(last_name) VALUES ("${answers.name.trim()}")`)
        console.log('Succesful entry')
    }).finally(()=> {
        promptUser()
    })
}