import { useQuery } from "react-query";
import supabase from "../backend/api/supabase";
import getCurrentUserId from "../utils/getUser"

const getOrders = async () => {
    const uid = await getCurrentUserId();

    // gets from the order table; we need more info for it in /member/manage/projects
    // TODO: New table with more info about the order
    let { data, error } = await supabase.from("Order").select("*").eq('buyerId', uid);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export default function useOrders() {
    return useQuery("orders", () => getOrders());
}
