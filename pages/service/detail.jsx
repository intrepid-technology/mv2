import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PlasmicServicedetail } from "../../components/plasmic/market_v_2/PlasmicServicedetail";
import useCreateOrder from "../../hooks/useCreateOrder";
import { getListing } from "../../hooks/useListing";
import { useQuery } from "react-query";
import getCurrentUserId from "../../utils/getUser";

function Servicedetail() {
  const router = useRouter();
  const [listingId, setListingId] = useState(null);
  const [buyerId, setBuyerId] = useState(null);
  const { data: listing, isLoading } = useQuery(
    ["listing", { listingId }],
    getListing
  );

  const handleCheckout = async () => {
    createOrderMutation.mutate();
  };

  const createOrderMutation = useCreateOrder(buyerId, listingId);

  useEffect(() => {
    if (!router?.query?.id) return;

    async function getAndSetCurrentUserId() {
      const uid = await getCurrentUserId();
      setBuyerId(uid);
    }
    getAndSetCurrentUserId();

    setListingId(router?.query?.id);
  }, [router]);

  if (isLoading || !listing) {
    return <>Loading</>;
  }

  if (createOrderMutation.isSuccess) {
    router.push(createOrderMutation.data.url);
  }

  if (createOrderMutation.isError) {
    console.log(createOrderMutation.error.message);
  }

  return (
    <PlasmicServicedetail
      headline={listing.name}
      orderButton={{
        props: {
          onClick: handleCheckout,
          disabled: !buyerId,
        },
      }}
    />
  );
}

export default Servicedetail;
