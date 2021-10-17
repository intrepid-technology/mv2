import { useMutation } from "react-query";
import supabase from "../backend/api/supabase";

const updateUser = async (userId, values) => {
  console.log(`Updating user ${userId} with ${JSON.stringify(values)}`);
  const { data, error } = await supabase
    .from("User")
    .update(values)
    .eq("id", userId);

  if (error) {
    throw error;
  }

  return data;
};

export default function useUpdateUser(userId, values) {
  return useMutation(() => updateUser(userId, values), {
    onSuccess: async (data) => {
      console.log(data);
      return data;
    },
  });
}
