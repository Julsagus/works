import express, { Request, Response } from 'express';
import { ContactsController } from '../controllers/ContactsController';

const router = express.Router();
const controller = new ContactsController();

router.get('/', (req: Request, res: Response) => {
  res.render('index', { nombre: 'Diego', apellido: 'Duarte', cedula:'27131521',seccion:'4',title:'Hola mundooo' });
});

router.get('/menu', (req: Request, res: Response) => {
  res.render('menu', { title: 'Menú' });
});

router.get('/informacion', (req: Request, res: Response) => {
  res.render('informacion', { title: 'informacion' });
});

router.get('/contact', (req: Request, res: Response) => {
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

router.get('/confirmacion', (req: Request, res: Response) => {
  res.render('confirmacion', { title: 'informacion' });
});

router.post('/contact/add', controller.add.bind(controller));

router.get('/admin/contacts', controller.list.bind(controller));

router.get('/index', (req, res) => {
  res.render('index', { title: 'inicio' });
});

export default router;
