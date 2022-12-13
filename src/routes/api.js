const express = require('express')
const router = require('express').Router();
const controller = require('../controllers/contactos');

router.get('/contactos',controller.getAll);
router.get('/contactos/:id',controller.getById);
router.get('/contactos/nombre/:nombre',controller.getByName);
router.get('/contactos/email/:email',controller.getByEmail);
router.post('/contactos',express.json(),controller.post);
router.put('/contactos',express.json(),controller.put);
router.delete('/contactos',express.json(),controller.delete);

module.exports = router