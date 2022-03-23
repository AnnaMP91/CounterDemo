const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.json());

app.get('/doSomeMath', (req, res) => {
  console.log('req coming in from the client: ', req.query);
  let math = req.query.count * 3;
  res.send(JSON.stringify(math));
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})