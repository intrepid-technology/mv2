import { useMutation } from "react-query";
import supabase from "../backend/api/supabase";

const updateTeam = async (teamId, values) => {
  console.log(`Updating team ${teamId} with ${JSON.stringify(values)}`);
  const { data, error } = await supabase
    .from("Team")
    .update(values)
    .eq("id", teamId);

  if (error) {
    throw error;
  }

  return data;
};

export default function useUpdateTeam(teamId, values) {
  return useMutation(() => updateTeam(teamId, values), {
    onSuccess: async (data) => {
      console.log(data);
      return data;
    },
  });
}
