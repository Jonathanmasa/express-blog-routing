const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// prima rotta
app.get('/', (req, res) => {
    res.send(`<h1>server del mio blog</h1>`);
})



// partenza dal server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})