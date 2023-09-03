import createTodo from '../../models/todo/create';

const create = (req: any, res: any) => {
  res.send(createTodo(req.body))
}

export default create;