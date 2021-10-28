import { useMutation } from "react-query";

const host = "localhost";
const port = "8000";
const protocol = "http";
const axios = require("axios");

const createOrder = async (buyerId, listingId) => {
  const { data, error: error } = await axios.post(
    `${protocol}://${host}:${port}/api/orders`,
    {
      buyerId,
      listingId,
    }
  );

  if (error) {
    throw error;
  }

  return data;
};

export default function usecreateOrder(buyerId, listingId) {
  return useMutation(() => createOrder(buyerId, listingId), {
    onSuccess: async (data) => {
      console.log(data);
      return data;
    },
  });
}
