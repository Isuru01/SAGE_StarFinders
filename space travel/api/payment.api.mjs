import AxiosInstance from "./AxiosInstance.mjs";

const pay = async (payment) => {
  const result = await AxiosInstance().post(`/pay`, payment, {
    timeout: 10000,
  });

  return result.data;
};

export { pay };
