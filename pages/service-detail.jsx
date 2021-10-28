import { useRouter } from "next/router";
import * as React from "react";
import { PlasmicServiceDetail } from "../components/plasmic/market_v_2/PlasmicServiceDetail";
import useCreateOrder from "../hooks/useCreateOrder";

function ServiceDetail() {
  const router = useRouter();
  const listingId = router.query["id"];

  const [buyerId, setBuyerId] = React.useState(
    "48649605-13db-479b-a0a2-162b2d6c7030"
  );

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

  return (
    <div>
      <button className="button" onClick={handleCheckout}>
        Order
      </button>
      <PlasmicServiceDetail />
    </div>
  );
}

export default ServiceDetail;
