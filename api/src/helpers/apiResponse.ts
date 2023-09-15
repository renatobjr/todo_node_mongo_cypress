const apiResponse = (method: String, status: boolean, response: Object) => {
  return {
    method,
    status,
    response
  }
}

export default apiResponse;