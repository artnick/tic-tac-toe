const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 8080;

require('./server/sockets')(server);

server.listen(PORT, function(){
  console.log(`App listening on port ${PORT}!`);
});
