import * as React from "react";

import { PlasmicFormConditionalField } from "./plasmic/market_v_2/PlasmicFormConditionalField";
import { useFormContext } from "react-hook-form";

function FormConditionalField_(props, ref) {
  const {watch} = useFormContext()
  const fieldValue = watch(props.name)

  if (fieldValue?.toString() === props.value) return null

  return (
    <PlasmicFormConditionalField root={{ ref }} {...props} />
  );
}

const FormConditionalField = React.forwardRef(FormConditionalField_);

export default FormConditionalField;
