import * as React from "react";

import { Controller, useFormContext } from "react-hook-form";

import { PlasmicFormCheckboxInput } from "./plasmic/market_v_2/PlasmicFormCheckboxInput";

function FormCheckboxInput_(props, ref) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <PlasmicFormCheckboxInput
          root={{ ref }}
          {...props}
          checkboxInput={{
            ...field,
          }}
        />
      )}
    />
  );
}

const FormCheckboxInput = React.forwardRef(FormCheckboxInput_);

export default FormCheckboxInput;
