import * as React from "react";

import { PlasmicSwitchInput } from "./plasmic/market_v_2/PlasmicSwitchInput";

function SwitchInput_({ value, onChange, ...props }, ref) {
  const [on, setOn] = React.useState(value);

  React.useEffect(() => {
    onChange && onChange(on);
  }, [on]);

  return (
    <PlasmicSwitchInput
      root={{ ref }}
      {...props}
      on={on}
      onClick={() => setOn(!on)}
    />
  );
}

const SwitchInput = React.forwardRef(SwitchInput_);

export default SwitchInput;
