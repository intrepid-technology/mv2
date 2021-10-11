import * as React from "react";

import { PlasmicButtonPrimary } from "./plasmic/market_v_2/PlasmicButtonPrimary";
import { useRouter } from "next/router";

function ButtonPrimary_(props, ref) {
  const router = useRouter();

  const handleOnClick = (e) => {
    if (props.disabled) return;

    if (props.preventDefault) e.preventDefault();

    if (props.destination) router.push(props.destination);

    props.onClick && props.onClick(e);
  };

  return (
    <PlasmicButtonPrimary
      root={{ ref }}
      {...props}
      onClick={(e) => handleOnClick(e)}
    />
  );
}

const ButtonPrimary = React.forwardRef(ButtonPrimary_);

export default ButtonPrimary;
