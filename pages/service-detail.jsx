import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PlasmicServiceDetail } from "../components/plasmic/market_v_2/PlasmicServiceDetail";
import useCreateOrder from "../hooks/useCreateOrder";
import getCurrentUserId from "../utils/getUser";

function ServiceDetail() {
  const router = useRouter();
  const listingId = router.query["id"];

  const [buyerId, setBuyerId] = useState(null);

  useEffect(() => {
    async function getAndSetCurrentUserId() {
      const uid = await getCurrentUserId();
      setBuyerId(uid);
    }
    getAndSetCurrentUserId();
  });

  const handleCheckout = async () => {
    createOrderMutation.mutate();
  };

  const createOrderMutation = useCreateOrder(buyerId, listingId);

  if (createOrderMutation.isSuccess) {
    router.push(createOrderMutation.data.url);
  }

  if (createOrderMutation.isError) {
    console.log(createOrderMutation.error.message);
  }

  const orderButton =
    buyerId === null ? null : (
      <button className="button" onClick={handleCheckout}>
        Order
      </button>
    );

  return (
    <div>
      {orderButton}
      <PlasmicServiceDetail />
    </div>
  );
}

export default ServiceDetail;
