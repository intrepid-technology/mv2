import * as React from "react";

import { PlasmicButtonStripeVerification } from "./plasmic/market_v_2/PlasmicButtonStripeVerification";

function ButtonStripeVerification_(props, ref) {
  const handleClick = e => {
    e.preventDefault && e.preventDefault()
    props.onClick && props.onClick(e)
  }

  return <PlasmicButtonStripeVerification root={{ ref }} {...props} onClick={e => handleClick(e)} />;
}

const ButtonStripeVerification = React.forwardRef(ButtonStripeVerification_);

export default ButtonStripeVerification;
