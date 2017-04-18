// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static(path.resolve(__dirname, '..', 'build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });


const app = require('express')();
const server = require('http').Server(app);

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, function(){
  console.log(`App listening on port ${PORT}!`);
});
