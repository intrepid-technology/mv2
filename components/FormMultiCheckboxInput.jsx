import * as React from "react";

import { Controller, useFormContext } from "react-hook-form";

import { PlasmicFormMultiCheckboxInput } from "./plasmic/market_v_2/PlasmicFormMultiCheckboxInput";

function FormMultiCheckboxInput_({name, options, uniqueKey = 'id', displayKey = 'label', ...props}, ref) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[{id: 1, label: 'Apple'}]}
      render={
        ({field: { value, onChange }}) =>
          <PlasmicFormMultiCheckboxInput
            root={{ ref }}
            {...props}
            multiCheckboxInput={{
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

const FormMultiCheckboxInput = React.forwardRef(FormMultiCheckboxInput_);

export default FormMultiCheckboxInput;
