const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');

const server = express();

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {
  const about = {
    avatar_url: "https://avatars1.githubusercontent.com/u/60045489?s=460&u=0a22989da6fa43f7a1e64326fcf3ef8b3bb9b96c&v=4",
    name: "Vinicius Lopes",
    role: "Full Stack Developer",
    description: 'Trabalho atualmente na empresa Grupo Assessor, e realizo atualmente o curso Launchbase da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      { name: "Github", url: "https://github.com/vinyshoow"},
      { name: "Linkedin", url: "https://www.linkedin.com/in/vinicius-lopesqz"},
      { name: "Instagram", url: "https://www.instagram.com/viinyshoow/"}
    ]
  }

  return res.render('about', { about });
})

server.get('/portfolio', (req, res) => {
  return res.render('portfolio', { items: videos });
})

server.get('/video', (req, res) => {
  const id = req.query.id;

  const video = videos.find(function(video) {
    return video.id == id   
  });

  if(!video) {
    return res.send("video not found.");
  }
  return res.render("video", {item: video});
})

server.listen(3333, () => {
  console.log('server is running');
})