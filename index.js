const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();

//body parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
//handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');


app.get('/', (req,res) => {

});


app.listen(3000, () => {

    console.log("Rodando Aplicação");

});