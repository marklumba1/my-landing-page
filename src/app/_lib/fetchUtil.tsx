const fetchUtil = async <T = any> (endpoint: string): Promise<T> => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`Error Fetch:${response.statusText}`);
    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error Request: ${error}`);
  }
};
 export default fetchUtil