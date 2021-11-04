import { useQuery } from "react-query";
import supabase from "../backend/api/supabase";

const getListings = async () => {
  let { data, error } = await supabase.from("Listing").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useListings() {
  return useQuery("listings", () => getListings());
}
