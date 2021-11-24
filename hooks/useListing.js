import { useQuery } from "react-query";
import supabase from "../backend/api/supabase";

export const getListing = async (query) => {
  const listingId = query?.queryKey[1]?.listingId;
  if (!listingId) return;

  let { data, error } = await supabase
    .from("Listing")
    .select("*")
    .eq("id", listingId);

  if (error) {
    throw new Error(error.message);
  }

  return data.length && data[0];
};
