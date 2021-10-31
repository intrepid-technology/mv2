import * as React from "react";

import { Controller, useFormContext } from "react-hook-form";
import { get, isArray } from "lodash";

import { PlasmicFormSelectInput } from "./plasmic/market_v_2/PlasmicFormSelectInput";

function FormSelectInput_(
  {
    options,
    displayKey = "label",
    displayFunc,
    uniqueKey = "id",
    setSelectedItem,
    parser,
    ...props
  },
  ref
) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={props.defaultValue || undefined}
      render={({ field: { value, onChange } }) => {
        if (isArray(value)) {
          value = value[0];
        }

        return (
          <PlasmicFormSelectInput
            root={{ ref }}
            {...props}
            nativeSelectInput={{
              value: get(value, uniqueKey, null),
              options,
              displayKey,
              displayFunc,
              uniqueKey,
              setSelectedObj: onChange,
              onChange: setSelectedItem,
              parser,
            }}
          />
        );
      }}
    />
  );
}

const FormSelectInput = React.forwardRef(FormSelectInput_);

export default FormSelectInput;
