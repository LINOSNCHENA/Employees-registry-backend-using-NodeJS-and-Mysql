// FAMILY TABLE # 2/4

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "presly",
  password: "Monze2020",
  port: 5433,
});

const createFamily = (request, response) => {
  //  CREATE 1
  const { id3, mother, father } = request.body;
  pool.query(
    "INSERT INTO XFAMILY (id3,mother, father) VALUES ($1,$2,$3)",
    [id3, mother, father],
    (error, employed) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(
          `New next of kin contact of employee added: ${
            mother + " and " + father
          }`
        );
    }
  );
};

const getFamilys = (request, response) => {
  // GET ALL 2A
  pool.query("SELECT * FROM XFAMILY ORDER BY id3 ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({
      status: "success",
      data: results.rows,
      message: "Retrieved ALL next of kins comtacts",
    });
  });
};

const getFamily = (request, response) => {
  // GET ONE 2B
  const id = parseInt(request.params.id3);
  pool.query("SELECT * FROM XFAMILY WHERE id3 = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({
      status: "success",
      data: results.rows,
      message: "Retrieved contacts of next of kins selected",
    });
  });
};

const updateFamily = (request, response) => {
  //  UPDATE  3
  const id = parseInt(request.params.id3);
  const { mother, father } = request.body;
  pool.query(
    "UPDATE XFAMILY SET mother=$1, father=$2 WHERE id3 = $3",
    [mother, father, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Contact modified with ID: ${id}`);
    }
  );
};

const deleteFamily = (request, response) => {
  // DELETE 4
  const id = parseInt(request.params.id3);
  pool.query("DELETE FROM XFAMILY WHERE id3 = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Contact deleted with ID: ${id}`);
  });
};

module.exports = {
  getFamily,
  getFamilys,
  createFamily,
  updateFamily,
  deleteFamily,
};
