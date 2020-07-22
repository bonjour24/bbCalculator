const express=require('express');
const expbs=require('express-handlebars');
const app=express();
const path=require('path');
const parse=require('body-parser');

//Middleware
const urlencodedParser = parse.urlencoded({ extended:true });

//PArsing setup
app.use(urlencodedParser);
app.use(parse.json());

//Engine setup
app.engine('handlebars',expbs({
    defaultLayout:'main',
    layoutsDir:path.join(__dirname,'views/layouts')
}));

let port = process.env.port || 5000;
app.set('view engine','handlebars');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.listen(port,()=>{
    console.log('Express server started at port '+port)
});



