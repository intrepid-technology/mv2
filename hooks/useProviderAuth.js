import { useMutation } from "react-query";
import supabase from "../backend/api/supabase";

const providerAuth = async ({ provider }) => {
  const { data, error } = await supabase.auth.signIn({ provider });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useProviderAuth({ provider }) {
  return useMutation("providerAuth", () => providerAuth({ provider }));
}
