import getTodo from '../../models/todo/get';

const get = (req:any, res: any) => {
  res.send(getTodo())
}

export default get