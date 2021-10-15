import * as React from "react";

import {useCombobox, useMultipleSelection} from 'downshift'

import ChipBadgeDisplay from "./ChipBadgeDisplay";
import MultiSelectOption from "./MultiSelectOption";
import { PlasmicMultiSelectInput } from "./plasmic/market_v_2/PlasmicMultiSelectInput";
import {isArray} from 'lodash'

function MultiSelectInput_({
  value,
  onChange,
  options,
  displayKey = "label",
  displayFunc,
  uniqueKey = "id",
  setSelectedItem,
  parser,
  ...props
}, ref) {
  const [inputValue, setInputValue] = React.useState('')
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({initialSelectedItems: isArray(value) ? value : []})
  const getFilteredItems = (options) =>
    options.filter(
      (item) => 
        !selectedItems?.map(si => si.id).includes(item.id) &&
        item?.label?.toLowerCase()?.startsWith(inputValue.toLowerCase()),
    )
  
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox({
    inputValue,
    items: getFilteredItems(options),
    onStateChange: ({inputValue, type, selectedItem}) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
            selectItem(null)
          }

          break
        default:
          break
      }
    },
  })


  React.useEffect(() => {
    onChange && onChange(selectedItems)
  }, [selectedItems])

  return (
    <PlasmicMultiSelectInput
      root={{ ref }}
      {...props}
      selectedOptionsWrapper={{
        wrapChildren: (children) => (
            !selectedItems?.length ? null : selectedItems.map((selectedItem, index) => {
              const displayLabel = displayFunc
              ? displayFunc(selectedItem)
              : selectedItem[displayKey];

              return (
                <ChipBadgeDisplay
                  key={`selected-item-${index}`}
                  trigger="delete"
                  color="brand"
                  {...getSelectedItemProps({selectedItem, index})}
                  onClick={() => removeSelectedItem(selectedItem)}
                >
                  {displayLabel}
                </ChipBadgeDisplay>
              )})
          )
      }}
      comboBoxWrapper={{
        ...getComboboxProps()
      }}
      dropdownButtonWrapper={{
        ...getToggleButtonProps()
      }}
      inputContainer={{
        ...getInputProps(getDropdownProps({preventKeyAction: isOpen})),
      }}
      optionGroup={{
        render: (ps) => (
          <div {...getMenuProps(ps)}>
            <div {...ps}>
              {isOpen &&
                getFilteredItems(options).map((item, index) => {
                  const displayLabel = displayFunc
                    ? displayFunc(item)
                    : item[displayKey];

                  return (
                    <MultiSelectOption
                      isHighlighted={highlightedIndex === index}
                      key={`${item}${index}`}
                      {...getItemProps({item, index})}
                    >
                      {displayLabel}
                    </MultiSelectOption>
                )}
              ) || null}
            </div>
          </div>
        )
      }}
    />
  );
}

const MultiSelectInput = React.forwardRef(MultiSelectInput_);

export default MultiSelectInput;
