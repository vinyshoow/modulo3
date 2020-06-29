const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server
})

server.get('/', (req, res) => {
  return res.render('about');
})

server.get('/portfolio', (req, res) => {
  return res.render('portfolio');
})

server.listen(3333, () => {
  console.log('server is running');
})