import * as React from "react";

import { Controller, useFormContext } from "react-hook-form";

import { PlasmicFormTextAreaInput } from "./plasmic/market_v_2/PlasmicFormTextAreaInput";

function FormTextAreaInput_(props, ref) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <PlasmicFormTextAreaInput
          root={{ ref }}
          {...props}
          textAreaInput={{
            ...field,
          }}
        />
      )}
    />
  );
}

const FormTextAreaInput = React.forwardRef(FormTextAreaInput_);

export default FormTextAreaInput;
