import axios from "axios";

const AxiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 3000,
  });

  return instance;
};

export default AxiosInstance;
