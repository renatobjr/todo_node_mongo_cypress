const list = () => {
  try {
    return {
      method: 'list',
      status: true
    }
  } catch (error: any) {
    return error;
  }
}

export default list;