const express = require('express');
const app = express();

app.use(express.json())

app.use('/static', express.static('public'))
// for CRA: app.use('/static', express.static(path.join(__dirname, (dev ? '../client' : '/build/static'))))

app.get('/', (req, res) => {
  res.sendFile('pages/index.html', { root: __dirname })
});

app.get('/test', (req, res) => {
  res.send('helloo')
});

app.post('/post', function (req, res) {
  console.log(req.body)
  res.send(req.body)
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port, process.env.NODE_ENV);
});