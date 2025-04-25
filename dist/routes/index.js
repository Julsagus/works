"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('index', { nombre: 'Diego', apellido: 'Duarte', cedula: '27131521', seccion: '4', title: 'Hola mundooo' });
});
router.get('/menu', (req, res) => {
    res.render('menu', { title: 'Menú' });
});
router.get('/informacion', (req, res) => {
    res.render('informacion', { title: 'informacion' });
});
router.get('/ordenes', (req, res) => {
    res.render('ordenes', { title: 'ordenes' });
});

router.get('/index', (req, res) => {
    res.render('index', { title: 'inicio' });
});
exports.default = router;
