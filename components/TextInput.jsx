import * as React from "react";

import { PlasmicTextInput } from "./plasmic/market_v_2/PlasmicTextInput";

function TextInput_({ value, onChange, disabled, ...props }, ref) {
  const handleOnChange = (newValue) => {
    onChange && onChange(newValue);
  };

  return (
    <PlasmicTextInput
      root={{ ref }}
      {...props}
      disabled={disabled}
      textInput={{
        type: props.type || "text",
        disabled,
        value,
        onChange: (e) => handleOnChange(e.target.value),
      }}
    />
  );
}

const TextInput = React.forwardRef(TextInput_);

export default TextInput;
