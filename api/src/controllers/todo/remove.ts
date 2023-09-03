import removeTodo from '../../models/todo/remove';

const remove = (req:any, res: any) => {
  res.send(removeTodo());
}

export default remove;