import updateTodo from '../../models/todo/update';

const update = async (req: any, res: any) => {
  res.send(await updateTodo(req.body));
};
export default update;