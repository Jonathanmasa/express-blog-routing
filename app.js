const express = require('express');
const app = express();
const port = 3000;
// importo il router dei posts
const postsRouter = require('./routers/posts');

app.use(express.static('public'));

// utilizzo la rotta dei post per definire la parte iniziale
app.use("/posts", postsRouter)


// index
app.get('/posts', function (req, res) {
res.send('Lista dei post');
});

// show
app.get('/posts/:id', function (req, res) {
res.send('Dettagli dei post' + req.params.id);
});

// store
app.post('/posts', function (req, res) {
res.send('Creazione nuovo post');
});

// update
app.put('/posts/:id', function (req, res) {
res.send('Modifica integrale del post' + req.params.id);
});

// modify
app.patch('/posts/:id', function (req, res) {
res.send('Modifica parziale del post' + req.params.id);
});

// destroy
app.delete('/posts/:id', function (req, res) {
res.send('Eliminazione del post' + req.params.id);
});
    
   

// partenza dal server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})