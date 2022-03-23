export const generateQueryParams = (queryParams) => {
  const searchParams = new URLSearchParams(queryParams);

  return `?${searchParams.toString()}`;
};
