export const parseResponse = (response) => {
  const parsedResponse = Object.keys(response).map(id => ({
    id,
    ...response[id]
  }));

  return parsedResponse;
}
