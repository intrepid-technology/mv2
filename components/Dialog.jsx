// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";

import { PlasmicDialog } from "./plasmic/market_v_2/PlasmicDialog";

function Dialog_(props, ref) {
  return (
    <PlasmicDialog
      root={{ ref }}
      {...props}
    />
  );
}

const Dialog = React.forwardRef(Dialog_);

export default Dialog;
