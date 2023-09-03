const get = () => {
  try {
    return {
      method: 'get',
      status: true
    }
  } catch (error: any) {
    return error;    
  }
}

export default get