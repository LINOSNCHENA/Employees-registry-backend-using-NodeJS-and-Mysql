// EMPLOYEES TABLE # 4/4

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "presly",
  password: "Monze2020",
  port: 5433,
});

const createEmployee = (request, response) => {
  //  CREATE 1
  const { name, mobile, office, stars } = request.body;
  pool.query(
    "INSERT INTO XWORKERS (name,mobile,office,stars ) VALUES ($1,$2,$3,$4)",
    [name, mobile, office, stars],
    (error, employed) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Name/mobile of Xworker added: ${name + " of " + mobile}`);
    }
  );
};

const getEmployees = (request, response) => {
  // GET ALL 2B
  pool.query("SELECT * FROM XWORKERS ORDER BY id1 ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({
      status: "success",
      data: results.rows,
      message: "Retrieved ALL XWORKERS",
    });
  });
};

const getEmployee = (request, response) => {
  // GET ONE 2A
  const id = parseInt(request.params.id1);
  pool.query(
    "SELECT * FROM XWORKERS WHERE id1 = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({
        status: "success",
        data: results.rows,
        message: "Retrieved employee selected",
      });
    }
  );
};

const updateEmployee = (request, response) => {
  //  PUT 3
  const id = parseInt(request.params.id1);
  const { name, dept, salary } = request.body;
  pool.query(
    "UPDATE XWORKERS SET name = $1, mobile=$2, office=$3, stars=$4 WHERE id1 = $5",
    [name, mobile, office, star, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Employee modified with ID: ${id}`);
    }
  );
};

const deleteEmployee = (request, response) => {
  // DELETE 4
  const id = parseInt(request.params.id1);
  pool.query("DELETE FROM XWORKERS WHERE id1 = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Employee deleted with ID: ${id}`);
  });
};

// CRUD
module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
