const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000


// Static files
app.use(express.static("public"))
app.use('/css', express.static(__dirname + "public/css"))
app.use('/img', express.static(__dirname + "public/img"))

// Templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs')


// Parsing 
app.use(express.urlencoded({extended: true}));

// Routes
const newsRouter = require('./src/routes/news.js')

app.use('/', newsRouter)


// listen on port
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));