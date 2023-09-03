import express from 'express';
import ctl from '../controllers/todo'

const route = express.Router();

route.get('/create', ctl.create);
route.get('/get', ctl.get);
route.get('/list', ctl.list)
route.get('/remove', ctl.remove);
route.get('/update', ctl.update);

export default route;