import markTaskAsDone from "../../models/todo/markAsDone";

const markAsDone = async (req: any, res: any) => {
  res.send(await markTaskAsDone(req.params.id))
}
export default markAsDone;