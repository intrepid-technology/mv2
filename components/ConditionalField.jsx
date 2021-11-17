import * as React from "react";

import { PlasmicConditionalField } from "./plasmic/market_v_2/PlasmicConditionalField";
import { useConditionalField } from "utils/useConditionalField";

function ConditionalField_({name, value, conditionValue, checkType, valueType, visibleIf, ...props}, ref) {
  const { isHidden } = useConditionalField({name, value, conditionValue, checkType, valueType, visibleIf})
  if (isHidden) return null

  return <PlasmicConditionalField root={{ ref }} {...props} />;
}

const ConditionalField = React.forwardRef(ConditionalField_);

export default ConditionalField;
