import AxiosInstance from "./AxiosInstance.mjs";

const fetchSearch = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/search?${queryKey[1]}`);
  console.log(result.data);
  return result.data;
};

export { fetchSearch };
