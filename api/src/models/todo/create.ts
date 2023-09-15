import todo from  '../../schemas/todo';
import apiResponse from '../../helpers/apiResponse';

const create = async (payload: any) => {
  try {
    const task = new todo({ ...payload })
    
    let result = await task.save();
    return apiResponse('create', true, result);
  } catch (error: any) {
    return apiResponse('create', false, error);
  }
}

export default create;