const express = require('express');
const port = 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})