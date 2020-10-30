require('./connectsAdmin');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({ origin: "*" }));

connection.connect(function (err) {
    if (err) throw err;
    console.log('You are connected to SMART-DATA Server!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/binsertData', function (req, res) {
    let name = req.body.name;
    let town = req.body.town;
    let hotel = req.body.hotel;
    let isactive = req.body.isactive;
    let createdat = new Date().toISOString().substring(0,19).replace('T',' ');
    connection.query("INSERT INTO `bookings`( `name`, `town`, `hotel`, `isactive`, `createdat`) VALUES('" + name + "','" + town + "','" + hotel + "','" + isactive + "','" + createdat + "')", function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Inserted Booking" });
        console.log({ "msg": "Successfully Inserted Booking" });
    });
});

app.get('/bgetdata', function (req, res) {
    connection.query('SELECT * FROM `bookings`', function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg":"Successfully many Selected Booking!" });
    });
});


app.get('/beditData/:id', function (req, res) {
    let id = req.params.id;
    connection.query("select *  FROM `bookings` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg":"Successfully Identified Booking!" });
    });

});

app.post('/bupdateData/:id', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let town = req.body.town;
    let hotel = req.body.hotel;
    let isactive = req.body.isactive;
    let createdat = new Date().toISOString().substring(0,19).replace('T',' ');
    connection.query("UPDATE `bookings` SET `name`= '" + name + "', `town` ='" + town + "',`hotel` ='" + hotel + "',isactive='" + isactive + "',createdat='"+ createdat + "'  where `id`= " + id, function (err, results) {
             if (err) throw err;if (err) throw err;
        res.send({ "msg": "Successfully Updated Booking" });
        console.log({ "msg":"Successfully Updated Booking!" });
    });
});

app.get('/bdeletedata/:id', function (req, res) {
    let id = req.params.id;
    connection.query("Delete  FROM `bookings` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg":"Successfully Deleted Booking!" });
    });
});
/////////////////////////////////////////////////////////////////////////////// 
const PORT = process.env.PORT32 || 4210;
app.listen(PORT, () => console.log(`BackEnd3- SMARTDATA- is listening on port32 : ${PORT}`))
