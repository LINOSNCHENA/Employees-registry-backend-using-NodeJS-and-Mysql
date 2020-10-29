// TEACHERS TABLE # 4/4

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'presly',
  password: 'Monze@2019',
  port: 5433
})

const createEmployee = (request, response) => {                                  //  CREATE
  const { name, dept, post, salary } = request.body
  pool.query('INSERT INTO bank3 (name,dept,post,salary ) VALUES ($1,$2,$3,$4)',
    [name, dept, post, salary],
    (error, employed) => {
      if (error) { throw error }
      response.status(201).send(`Name/dept of Xworker added: ${name + " of " + dept}`)
    })
}

const getEmployees = (request, response) => {                                 // GET ALL
  pool.query('SELECT * FROM bank3 ORDER BY id1 ASC', (error, results) => {
    if (error) { throw error }
    response.status(200).json({
      status: 'success',
      data: results.rows,
      message: 'Retrieved ALL bank3'
    });
  })
}

const getEmployee = (request, response) => {                                  // GET ONE
  const id = parseInt(request.params.id1)
  pool.query('SELECT * FROM bank3 WHERE id1 = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(200).json({
      status: 'success',
      data: results.rows,
      message: 'Retrieved employee selected'
    });
  })
}


const updateEmployee = (request, response) => {                                //  PUT 
  const id = parseInt(request.params.id1)
  const { name, dept, salary } = request.body
  pool.query('UPDATE bank3 SET name = $1, dept=$2, post=$3, salary=$4 WHERE id1 = $5',
    [name, dept, post, star, id],
    (error, results) => {
      if (error) { throw error }
      response.status(200).send(`Employee modified with ID: ${id}`)
    })
}


const deleteEmployee = (request, response) => {                               // DELETE
  const id = parseInt(request.params.id1)
  pool.query('DELETE FROM bank3 WHERE id1 = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(200).send(`Employee deleted with ID: ${id}`)
  })
}

// CRUD
module.exports = { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee, }