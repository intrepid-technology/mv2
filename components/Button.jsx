import * as React from "react";

import { PlasmicButton } from "./plasmic/market_v_2/PlasmicButton";

function Button_(props, ref) {
  function handleOnClick(event) {
    if (props.disabled) return;

    if (props.preventDefault) {
      event.preventDefault();
    }

    props.onClick && props.onClick(event);
  }

  return <PlasmicButton root={{ ref }} {...props} button={{type: 'submit'}} onClick={(e) => handleOnClick(e)} />;
}

const Button = React.forwardRef(Button_);

export default Button;
