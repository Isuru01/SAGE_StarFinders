import AxiosInstance from "./AxiosInstance.mjs";

const getTicketTotal = async () => {
  const result = await AxiosInstance().get(`booking/total`);
  return result.data;
};

const updatePassenger = async (passenger) => {
  const result = await AxiosInstance().put(`booking/passenger`, passenger, {
    timeout: 3000,
  });

  return result.data;
};

export { updatePassenger, getTicketTotal };
