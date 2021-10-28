import { useMutation } from "react-query";

const host = "localhost";
const port = "8000";
const protocol = "http";
const axios = require("axios");

const createOrder = async (sellerId, buyerId, listingId) => {
  const { data, error: error } = await axios.post(
    `${protocol}://${host}:${port}/api/orders`,
    {
      sellerId,
      buyerId,
      listingId,
    }
  );

  if (error) {
    throw error;
  }

  return data;
};

export default function usecreateOrder(sellerId, buyerId, listingId) {
  return useMutation(() => createOrder(sellerId, buyerId, listingId), {
    onSuccess: async (data) => {
      console.log(data);
    },
  });
}
