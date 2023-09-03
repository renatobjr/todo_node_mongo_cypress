const create = (body: any) => {
  try {
    console.log(body)
    return {
      method: 'create',
      status: true,
    }
  } catch (error: any) {
    return error;
  }
}

export default create;