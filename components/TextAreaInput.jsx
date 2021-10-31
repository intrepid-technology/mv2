import * as React from "react";

import { PlasmicTextAreaInput } from "./plasmic/market_v_2/PlasmicTextAreaInput";

function TextAreaInput_({ value, onChange, disabled, ...props }, ref) {
  const handleOnChange = (newValue) => {
    onChange && onChange(newValue);
  };

  return (
    <PlasmicTextAreaInput
      root={{ ref }}
      {...props}
      disabled={disabled}
      textarea={{
        type: props.type || "text",
        disabled,
        value,
        onChange: (e) => handleOnChange(e.target.value),
      }}
    />
  );
}

const TextAreaInput = React.forwardRef(TextAreaInput_);

export default TextAreaInput;
