import listTodo from '../../models/todo/list';

const list = async (req:any, res: any) => {
  res.send(await listTodo());
}

export default list;