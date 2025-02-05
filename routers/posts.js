// importo express e utilizzo la parte di routing
const express = require('express');
const router = express.Router();

// index
app.get('/pizzas', function (req, res) {
res.send('Lista delle pizze');
});

// show
app.get('/pizzas/:id', function (req, res) {
res.send('Dettagli della pizza ' + req.params.id);
});

// store
app.post('/pizzas', function (req, res) {
res.send('Creazione nuova pizza');
});

// update
app.put('/pizzas/:id', function (req, res) {
res.send('Modifica integrale della pizza ' + req.params.id);
});

// modify
app.patch('/pizzas/:id', function (req, res) {
res.send('Modifica parziale della pizza ' + req.params.id);
});

// destroy
app.delete('/pizzas/:id', function (req, res) {
res.send('Eliminazione della pizza ' + req.params.id);
});

// partenza dal server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })