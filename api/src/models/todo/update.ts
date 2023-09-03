const update = () => {
  try {
    return {
      method: 'update',
      status: true
    }
  } catch (error: any) {
    return error;
  }
}

export default update;