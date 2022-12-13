const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3000;
const dbUser = "usuario_prueba"
const dbPass = "user"
const dbDB = "agenda"
const apiRoutes = require('./src/routes/api')

app.use(apiRoutes);

app.get('', (req,res)=>{
    res.send('Api works');
});


const uri = 'mongodb+srv://'+dbUser+':'+dbPass+'@cluster0.km08z3j.mongodb.net/'+dbDB+'?retryWrites=true&w=majority'
//cadena de coneccion, la funcion que hara al conectarse (es asincrona)
mongoose.connect(uri,(err)=>{
    if(err){
        console.log("Error to connect");
    }
    else{
        console.log('Success connection');
        app.listen(port, () => {
            console.log('Api running in port '+port);
        });
    }
})
//Error-first callback 
