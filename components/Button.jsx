import * as React from "react";

import { PlasmicButton } from "./plasmic/market_v_2/PlasmicButton";
import { useRouter } from "next/router";

function Button_(props, ref) {
  const router = useRouter();

  function handleOnClick(event) {
    if (props.disabled) return;

    if (props.preventDefault) {
      event.preventDefault();
    }

    if (props.destination) router.push(props.destination);

    props.onClick && props.onClick(event);
  }

  return <PlasmicButton root={{ ref }} {...props} button={{type: 'submit'}} onClick={(e) => handleOnClick(e)} />;
}

const Button = React.forwardRef(Button_);

export default Button;
