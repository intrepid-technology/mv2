import * as React from "react";

import { Controller, useFormContext } from "react-hook-form";

import { PlasmicFormTextInput } from "./plasmic/market_v_2/PlasmicFormTextInput";

function FormTextInput_(props, ref) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <PlasmicFormTextInput
          root={{ ref }}
          {...props}
          textInput={{
            ...field,
          }}
        />
      )}
    />
  );
}

const FormTextInput = React.forwardRef(FormTextInput_);

export default FormTextInput;
