import * as React from "react";

import ArrayInputFieldRow from "./ArrayInputFieldRow";
import { PlasmicArrayInputFields } from "./plasmic/market_v_2/PlasmicArrayInputFields";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

const INPUT_KIND_MAPPING = {
  "text": TextInput,
  "textarea": TextAreaInput,
} 

function ArrayInputFields_({fieldKinds, fieldPlaceholders, data, ...props}, ref) {
  
  const handleItemChange = (config) => {
    if(config.rowIndex === undefined) return;
    props.onChange && props.onChange(config)
  }

  const handleAddClick = () => {
    props.onAdd && props.onAdd()
  }

  const handleRemoveClick = (rowIndex) => {
    props.onRemove && props.onRemove(rowIndex)
  }

  return (
    <PlasmicArrayInputFields
      root={{ ref }}
      {...props}
      itemContainer={
        data?.map((row, rowIndex) => 
          <ArrayInputFieldRow
            children={
              Object.entries(row)?.map(([itemKey, itemValue], idx) => {
                const Component = INPUT_KIND_MAPPING[fieldKinds[idx]]
                return (
                  <Component
                    key={`${rowIndex}-${itemKey}`}
                    value={itemValue}
                    onChange={value => handleItemChange({value, key: itemKey, rowIndex})}
                    placeholder={fieldPlaceholders?.length && fieldPlaceholders[idx]}
                  />
                )
              })
            }
            removeButton={{
              onClick: () => handleRemoveClick(rowIndex)
            }}
          />
        )
      }
      addIcon={{
        onClick: () => handleAddClick()
      }}
    />
  );
}

const ArrayInputFields = React.forwardRef(ArrayInputFields_);

export default ArrayInputFields;
