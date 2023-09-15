import removeTodo from '../../models/todo/remove';

const remove = async (req:any, res: any) => {
  res.send(await removeTodo(req.params.id));
}

export default remove;