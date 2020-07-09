const express = require('express');
const app = express();
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

app.use(express.json())

app.use('/static', express.static(path.join(__dirname, '/build/static')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/test', (req, res) => {
  res.send('ok')
});

app.post('/post', function (req, res) {
  console.log(req.body)
  res.send(req.body)
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port)
  console.log('NODE_ENV', process.env.NODE_ENV)
});