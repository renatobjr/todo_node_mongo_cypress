import todo from '../../schemas/todo';
import apiResponse from '../../helpers/apiResponse';

const update = async (payload: any) => {
  try {
    const result = await todo.findOneAndUpdate({_id: payload._id}, payload, {new: true});
    return apiResponse('update', true, result);
  } catch (error: any) {
    return apiResponse('update', false, error);
  }
}

export default update;