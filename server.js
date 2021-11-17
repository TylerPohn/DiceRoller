const express = require('express');
const path = require('path');

const app = express();

// uncomment the below for proxy challenge
/*
const exampleAccounts = [
  {name: 'Anna', id: 'a0'},
  {name: 'Ben', id: 'b0'},
  {name: 'Clara', id: 'c0'},
  {name: 'David', id: 'd0'},
];

app.get('/api/accounts', (req, res) => {
  return res.status(200).send(leaderList);
});
*/
app.use(express.json());
// statically serve everything in the build folder on the route '/build'
console.log(123, path.resolve(__dirname, './build'));
app.use('/build', express.static(path.resolve(__dirname, './build')));
// serve index.html on the route '/'
//express.static is replacing the following: (because html gets bundled)
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
console.log('Listening on port 3000...');
