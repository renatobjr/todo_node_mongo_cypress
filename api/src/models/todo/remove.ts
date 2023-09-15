import todo from '../../schemas/todo';
import apiResponse from '../../helpers/apiResponse';

const remove = async  (id: String) => {
  try {
    let result = await todo.findByIdAndUpdate(id, { status: 'deleted'});

    return apiResponse('remove', true, result);
  } catch (error: any) {
    return apiResponse('remove', false, error);
  }
}

export default remove;