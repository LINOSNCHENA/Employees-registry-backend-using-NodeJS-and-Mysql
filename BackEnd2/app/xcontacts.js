// CONTACTS TABLE #1/4

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "presly",
  password: "Monze2020",
  port: 5432,
});

const createContact = (request, response) => {
  //  CRUD1
  const { id2, email, mobile, xstatus } = request.body;
  pool.query(
    "INSERT INTO XCONTACTS (id2,email,mobile,xstatus) VALUES ($1,$2,$3,$4)",
    [id2, email, mobile, xstatus],
    (error, employed) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`New contact of employee added: ${email + " of " + mobile}`);
    }
  );
};

const getContacts = (request, response) => {
  // GET 2a
  pool.query("SELECT * FROM XCONTACTS ORDER BY id2 ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({
      status: "success",
      data: results.rows,
      message: "Retrieved ALL comtacts",
    });
  });
};

const getContact = (request, response) => {
  // GET 2b
  const id = parseInt(request.params.id2);
  pool.query(
    "SELECT * FROM XCONTACTS WHERE id2 = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({
        status: "success",
        data: results.rows,
        message: "Retrieved contacts selected",
      });
    }
  );
};

const updateContact = (request, response) => {
  //  UPDATE  3
  const id = parseInt(request.params.id2);
  const { email, mobile, xstatus } = request.body;
  pool.query(
    "UPDATE XCONTACTS SET email=$1, mobile=$2, xstatus=$3 WHERE id2 = $4",
    [email, mobile, xstatus, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Contact modified with ID: ${id}`);
    }
  );
};

const deleteContact = (request, response) => {
  // DELETE 4
  const id = parseInt(request.params.id2);
  pool.query("DELETE FROM XCONTACTS WHERE id2 = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Contact deleted with ID: ${id}`);
  });
};

// Crude Modules
module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
