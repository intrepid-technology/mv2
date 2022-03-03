import * as React from "react";

import { PlasmicFormSwitchInput } from "./plasmic/market_v_2/PlasmicFormSwitchInput";

function FormSwitchInput_(props, ref) {
  return (
    // <Controller
    //   control={control}
    //   name={props.name}
    //   defaultValue={props.defaultValue}
    //   render={({ field }) => (
    <PlasmicFormSwitchInput
      root={{ ref }}
      {...props}
      // switchInput={{
      //   ...field,
      // }}
    />
    //   )}
    // />
  );
}

const FormSwitchInput = React.forwardRef(FormSwitchInput_);

export default FormSwitchInput;
