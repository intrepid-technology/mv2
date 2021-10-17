import { useMutation } from "react-query";
import supabase from "../backend/api/supabase";

const createUser = async (user) => {
  // Check if username exists
  const { data: userWithEmail } = await supabase
    .from("User")
    .select("*")
    .eq("email", user.email)
    .single();

  if (userWithEmail) {
    throw new Error("User with email exists");
  }

  const { data, error: signUpError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  if (signUpError) {
    throw signUpError;
  }

  return data;
};

export default function useCreateUser(user) {
  return useMutation(() => createUser(user), {
    onSuccess: async (data) => {
      console.log(data);
      const { data: insertData, error: insertError } = await supabase
        .from("User")
        .insert({
          id: data.id,
          email: data.email,
        });

      if (insertError) {
        throw insertError;
      }

      return insertData;
    },
  });
}
