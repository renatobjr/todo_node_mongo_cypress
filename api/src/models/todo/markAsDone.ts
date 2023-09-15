import todo from '../../schemas/todo';
import apiResponse from '../../helpers/apiResponse';

const markAsDone = async (id: String) => {
  try {
    let result = await todo.findOneAndUpdate({_id:id}, {status: 'done'})
    return apiResponse('markAsDone', true, result);
  } catch (error: any) {
    return apiResponse('markAsDone', false, error)
  }
}

export default markAsDone;