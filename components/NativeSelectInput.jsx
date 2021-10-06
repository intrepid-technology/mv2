import * as React from "react";

import { PlasmicNativeSelectInput } from "./plasmic/market_v_2/PlasmicNativeSelectInput";
import SelectInput from "./SelectInput";

function NativeSelectInput_(
  {
    value,
    onChange,
    uniqueKey = "id",
    displayKey = "label",
    displayFunc,
    options,
    placeholder,
    setSelectedObj,
    disabled,
    ...props
  },
  ref
) {
  const handleOnChange = (value) => {
    console.log({ value });
    const selectedObj = (options || []).find(
      (option) => option[uniqueKey] == value
    );
    onChange && onChange(value);
    setSelectedObj && setSelectedObj(selectedObj);
  };

  return (
    <PlasmicNativeSelectInput
      root={{
        ref,
      }}
      selectInput={{
        render: (ps) => {
          return (
            <SelectInput
              {...ps}
              aria-label={"Select Component"}
              isDisabled={disabled}
              onChange={disabled ? null : handleOnChange}
              placeholder={placeholder || "Select..."}
              value={String(value)}
              children={
                <>
                  {(options || []).map((option) => {
                    const children = displayFunc
                      ? displayFunc(option)
                      : option[displayKey];
                    return (
                      <SelectInput.Option
                        key={option.id}
                        value={option[uniqueKey]}
                        children={children}
                      />
                    );
                  })}
                </>
              }
            />
          );
        },
      }}
      {...props}
    />
  );
}

const NativeSelectInput = React.forwardRef(NativeSelectInput_);

export default NativeSelectInput;
