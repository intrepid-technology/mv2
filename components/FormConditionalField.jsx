import * as React from "react";

import { PlasmicFormConditionalField } from "./plasmic/market_v_2/PlasmicFormConditionalField";
import { useConditionalField } from "utils/useConditionalField";
import { useFormContext } from "react-hook-form";

function FormConditionalField_(props, ref) {
  const {watch} = useFormContext()
  const fieldValue = watch(props.name)

  const { isVisible } = useConditionalField({value: fieldValue, conditionValue: props.value, checkType: "EQUAL"})
  if (!isVisible) return null

  return (
    <PlasmicFormConditionalField root={{ ref }} {...props} />
  );
}

const FormConditionalField = React.forwardRef(FormConditionalField_);

export default FormConditionalField;
