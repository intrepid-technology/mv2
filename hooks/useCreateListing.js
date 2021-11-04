import { useMutation } from "react-query";
import supabase from "../backend/api/supabase";

const createListing = async (values) => {
  const { data, error } = await supabase.from("Listing").insert(values);

  if (error) {
    throw error;
  }

  return data;
};

export default function usecreateListing(values) {
  return useMutation(() => createListing(values), {
    onSuccess: async (data) => {
      console.log(data);
      alert("Added a listing");
      return data;
    },
    onError: async (error) => {
      console.log(error);
      alert("Error when adding a listing: ", error);
    },
  });
}
