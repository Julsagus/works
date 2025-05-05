"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ContactsController_1 = require("../controllers/ContactsController");
const router = express_1.default.Router();
const controller = new ContactsController_1.ContactsController();
router.get('/', (req, res) => {
    res.render('index', { nombre: 'Diego', apellido: 'Duarte', cedula: '27131521', seccion: '4', title: 'Hola mundooo' });
});
router.get('/menu', (req, res) => {
    res.render('menu', { title: 'Menú' });
});
router.get('/informacion', (req, res) => {
    res.render('informacion', { title: 'informacion' });
});
router.get('/contact', (req, res) => {
    res.render('ordenes', {
        title: 'ordenes',
        succes: req.query.succes
    });
});
router.get('/payment', (req, res) => {
    res.render('payment');
});
router.post('/payment/add', (req, res) => {
    // Aquí procesarías el pago en un sistema real
    console.log('Datos de pago recibidos:', req.body);
    res.send('Pago realizado exitosamente');
});
router.get('/confirmacion', (req, res) => {
    res.render('confirmacion', { title: 'informacion' });
});
router.post('/contact/add', controller.add.bind(controller));
router.get('/admin/contacts', controller.list.bind(controller));
router.get('/index', (req, res) => {
    res.render('index', { title: 'inicio' });
});
exports.default = router;
