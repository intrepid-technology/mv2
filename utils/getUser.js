import supabase from "../backend/api/supabase";

let userId = null;

export default async function getCurrentUserId() {
  if (userId === null) {
    userId = await supabase.auth.user().id;
  }
  return userId;
}
