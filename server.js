const express = require('express');
const app = express();
const port = 4000;
const route = require('./routes/route.js');
const  path = require('path');
const connectDB = require('./connectDB/connectDB.js');
const bodyParser = require('body-parser');

// connection for database
connectDB()

// body-parser
app.use(bodyParser.urlencoded({extended:false}));

// setup for static files
app.use(express.static(path.join(process.cwd(), 'public')))

// setup for ejs template file
app.set('view engine', 'ejs')
app.set('views', './views')

// routes
app.use('/', route);

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
