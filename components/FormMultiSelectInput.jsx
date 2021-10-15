import * as React from "react";

import { Controller, useFormContext } from "react-hook-form";

import { PlasmicFormMultiSelectInput } from "./plasmic/market_v_2/PlasmicFormMultiSelectInput";

function FormMultiSelectInput_({
  name,
  value,
  options,
  displayKey = "label",
  displayFunc,
  uniqueKey = "id",
  setSelectedItem,
  parser,
  ...props
}, ref) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={
        ({field: { value, onChange }}) =>
          <PlasmicFormMultiSelectInput
            root={{ ref }}
            {...props}
            multiSelectInput={{
              value,
              onChange,
              options,
              uniqueKey,
              displayKey
            }}
          />
      }
    />
  );
}

const FormMultiSelectInput = React.forwardRef(FormMultiSelectInput_);

export default FormMultiSelectInput;
