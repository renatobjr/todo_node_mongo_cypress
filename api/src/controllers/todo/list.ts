import listTodo from '../../models/todo/list';

const list = (req:any, res: any) => {
  console.log('list')
  res.send(listTodo());
}

export default list;