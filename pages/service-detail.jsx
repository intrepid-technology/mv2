import * as React from "react";
import { PlasmicServiceDetail } from "../components/plasmic/market_v_2/PlasmicServiceDetail";
import useCreateOrder from "../hooks/useCreateOrder";

function ServiceDetail() {
  const [sellerId, setSellerId] = React.useState(
    "2b205512-541f-45fa-8f3c-3426cea85ee6"
  );
  const [buyerId, setBuyerId] = React.useState(
    "48649605-13db-479b-a0a2-162b2d6c7030"
  );
  const [listingId, setListingId] = React.useState(26);

  const handleCheckout = async () => {
    createOrderMutation.mutate();
  };

  const createOrderMutation = useCreateOrder(sellerId, buyerId, listingId);

  if (createOrderMutation.isSuccess) {
    console.log("Order placed");
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
