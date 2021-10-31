import * as React from "react";

import { PlasmicButtonStripeConnect } from "./plasmic/market_v_2/PlasmicButtonStripeConnect";

function ButtonStripeConnect_(props, ref) {
  const handleClick = e => {
    e.preventDefault && e.preventDefault()
    props.onClick && props.onClick(e)
  }

  return <PlasmicButtonStripeConnect root={{ ref }} {...props} onClick={e => handleClick(e)}/>;
}

const ButtonStripeConnect = React.forwardRef(ButtonStripeConnect_);

export default ButtonStripeConnect;
