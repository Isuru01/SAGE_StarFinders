import AxiosInstance from "./AxiosInstance.mjs";

const fetchSeatMap = async ({ queryKey }) => {
  const result = await AxiosInstance().get(
    `shuttle/seats/${queryKey[1]}`,
    queryKey[2]
  );
  console.log(result.data);

  return result.data;
};

const holdSeats = async (seats) => {
  const result = await AxiosInstance().put(
    `shuttle/seats/${seats.sid}}`,
    seats,
    {
      timeout: 3000,
    }
  );

  return result.data;
};

export { fetchSeatMap, holdSeats };
