import * as React from "react";

import { Controller, useFormContext } from "react-hook-form";

import { PlasmicFormSwitchInput } from "./plasmic/market_v_2/PlasmicFormSwitchInput";

function FormSwitchInput_(props, ref) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <PlasmicFormSwitchInput
          root={{ ref }}
          {...props}
          switchInput={{
            ...field,
          }}
        />
      )}
    />
  );
}

const FormSwitchInput = React.forwardRef(FormSwitchInput_);

export default FormSwitchInput;
