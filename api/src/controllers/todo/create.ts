import createTodo from '../../models/todo/create';

const create = async (req: any, res: any) => {
  res.send(await createTodo(req.body))
}

export default create;