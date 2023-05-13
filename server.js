// server.js
const config = require('./config.js');
const routes = require("./routes/router.js");
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', routes);

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});

console.log(process.env.hostDb);
console.log(process.env.passdb);
console.log(process.env.userdb);
console.log(process.env.db);