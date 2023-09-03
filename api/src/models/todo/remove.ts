const remove = () => {
  try {
    return {
      method: 'remove',
      status: true,
    }
  } catch (error: any) {
    return error;
  }
}

export default remove;