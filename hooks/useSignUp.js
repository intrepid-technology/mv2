import { useMutation } from "react-query";
import supabase from "../backend/api/supabase";

const signUp = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function useSignUp({ email, password }) {
  return useMutation("signup", () => signUp({ email, password }));
}
