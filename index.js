const express = require('express');
const {json} = require('body-parser');
const session = require('express-session');
const masterRoutes = require('./server/masterRoutes.js');
// const sessionConfig = require('./server/config/sessionConfig.js')

const port = 8080;
const app = express();

app.use(express.static(`${__dirname}/public`));	//__dirname refers to the current folder and directory
app.use(json());
app.use(session({secret: "hfsfdgfdh"}));
//////////////////////

masterRoutes(app);








//////////////////////
app.listen(port, ()=>{
	console.log(`Express listening on ${port}`);
})