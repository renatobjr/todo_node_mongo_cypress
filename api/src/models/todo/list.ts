import todo from '../../schemas/todo';
import apiResponse from '../../helpers/apiResponse';

const list = async () => {
  try {
    let result = await todo.find({status: 'pending'}).sort({updatedAt: -1}).exec();

    return apiResponse('list', true, result);
  } catch (error: any) {
    return apiResponse('list', false, error);
  }
}

export default list;