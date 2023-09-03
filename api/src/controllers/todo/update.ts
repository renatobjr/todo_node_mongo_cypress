import updateTodo from '../../models/todo/update';

const update = (req: any, res: any) => {
  res.send(updateTodo());
};
export default update;