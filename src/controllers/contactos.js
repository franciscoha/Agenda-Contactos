const { response } = require('express');
const contacto = require('./../models/contacto')

module.exports = {
    getAll:(req,res)=>{
        contacto.find({status:1})
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(400).send('algo salio mal');
        });
    },
    getByName:(req,res)=>{
        const nombre = req.params.nombre;
        contacto.find({status:1, nombre:nombre})
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(400).send('algo salio mal!');
        });
    },
    getById:(req,res)=>{
        const id = req.params.id;
        contacto.findOne({status:1, _id:id})
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(400).send('algo salio mal!');
        });
    },
    getByEmail:(req,res)=>{
        const correo = req.params.email;
        contacto.findOne({status:1, correo:correo})
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(400).send('algo salio mal!');
        });
    },
    post:(req,res)=>{
        const data = req.body;
        contacto.create(data)
        .then(response => {
            res.send(response);
        })
        .catch(err =>{
            res.status(400).send('algo salio mal!');
        });
    },
    put:(req,res)=>{
        const data = req.body;
        const nombre = data.nombre;
        const telefono = data.telefono;
        const email = data.correo;
        const status = data.status;
        contacto.findOne(contacto.findOne({_id:data._id}))
        .then(data => {
            data.status=status;
            data.telefono=telefono;
            data.nombre=nombre;
            data.correo=email;
            data.save();
            res.send(data);
        })
        .catch(err =>{
            res.status(400).send('algo salio mal!');
        });
    },
    delete:(req,res)=>{
        const data = req.body;
        contacto.findOne(contacto.findOne({_id:data._id}))
        .then(data => {
            data.status=0;
            data.save();
            res.send(data);
        })
        .catch(err =>{
            res.status(400).send('algo salio mal!');
        });
    }
}
//select * from contactos where status = 1