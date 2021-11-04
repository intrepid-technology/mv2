import * as React from "react";
import useCreateListing from "../../../hooks/useCreateListing";
import { PlasmicServicelistingdelivery } from "../../../components/plasmic/market_v_2/PlasmicServicelistingdelivery";
import { selectServiceListing } from "../../../state/serviceListing/selectors";
import { useSelector, useDispatch } from "react-redux";

function Servicelistingdelivery() {
  const serviceListing = useSelector(selectServiceListing);

  console.log("Delivery ", serviceListing);

  const createListingMutation = useCreateListing(serviceListing);

  if (createListingMutation.isSuccess) {
    alert("Inserted");
  }

  if (createListingMutation.isError) {
    console.log(createListingMutation.error.message);
  }

  return (
    <>
      <button onClick={async () => createListingMutation.mutate()}>
        Submit
      </button>
      <PlasmicServicelistingdelivery />;
    </>
  );
}

export default Servicelistingdelivery;
