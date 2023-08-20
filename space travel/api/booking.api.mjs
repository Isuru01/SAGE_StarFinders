import AxiosInstance from "./AxiosInstance.mjs";

const updatePassenger = async (passenger) => {
  const result = await AxiosInstance().put(`booking/passenger`, passenger, {
    timeout: 3000,
  });

  return result.data;
};

export { updatePassenger };
