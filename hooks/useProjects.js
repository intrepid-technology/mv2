import { useQuery } from "react-query";
import supabase from "../backend/api/supabase";
import getCurrentUserId from "../utils/getUser"

const getProjects = async () => {
    const uid = await getCurrentUserId();
    // gets from the order table; we need more info for it in /member/manage/projects
    // TODO: New table with more info about the order
    let { data, error } = await supabase.from("Order").select("*").eq('buyerId', uid);
    if (error) {
        throw new Error(error.message);
    }

    const listingIds = data.map(order => order.listingId);
    console.log("listing ", listingIds);

    ({data, error} = await supabase.from("Listing").select("name, amount").in("id", [26,27]));
    console.log("res ", data)
    if (error) {
        throw new Error(error.message);
    }

    // return listings;
    return data;
};

export default function useProjects() {
    return useQuery("projects", () => getProjects());
}
