import * as React from "react";

import CheckboxInput from "./CheckboxInput";
import { PlasmicMultiCheckboxInput } from "./plasmic/market_v_2/PlasmicMultiCheckboxInput";
import { isArray } from "lodash";

function MultiCheckboxInput_({name, options, uniqueKey = 'id', displayKey = 'label', value, onChange, ...props}, ref) {
  const [selectedItems, setSelectedItems] = React.useState(isArray(value) ? value : [])

  React.useEffect(() => {
    onChange && onChange(selectedItems)
  }, [selectedItems])

  function changeHandler(selectedItem, action) {
    if (!selectedItem) return;
    const i = selectedItems.findIndex(item => item[uniqueKey] === selectedItem[uniqueKey]);
    if (i === -1 && action === 'add') {
      setSelectedItems([...selectedItems, selectedItem])
    }

    if (i !== -1 && action === 'remove') {
      const tempSelectedItems = [...selectedItems];
      tempSelectedItems.splice(i, 1);
      setSelectedItems(tempSelectedItems);
    };
  }

  return (
    <PlasmicMultiCheckboxInput
      root={{
        wrapChildren: children => (
          options?.map(option => (
            <CheckboxInput
              name={name}
              isChecked={Boolean(selectedItems.find ? selectedItems?.find(selectedItem => selectedItem[uniqueKey] === option[uniqueKey]) : null)}
              onChange={(value) => changeHandler(option, value ? 'add' : 'remove')}
            >
              {option[displayKey]}
            </CheckboxInput>
          ))
        )
      }}
      {...props}
    />
  );

}

const MultiCheckboxInput = React.forwardRef(MultiCheckboxInput_);

export default MultiCheckboxInput;
