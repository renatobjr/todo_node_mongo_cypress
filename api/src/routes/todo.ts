import express from 'express';
import ctl from '../controllers/todo'

const route = express.Router();

route.post('/create', ctl.create);
route.post('/mark-as-done/:id', ctl.markAsDone);
route.get('/get', ctl.get);
route.get('/list', ctl.list)
route.post('/remove/:id', ctl.remove);
route.post('/update', ctl.update);

export default route;