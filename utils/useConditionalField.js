import { get } from "lodash"

export const CHECK_TYPE = {
    EQUAL: "EQUAL"
}

export const VALUE_TYPE = {
    STRING: "string",
    OBJECT: "object",
}

const EVALUATE_CONDITION_FUNCS = {
    [CHECK_TYPE.EQUAL]: (value, conditionValue) => value?.toString() === conditionValue?.toString()
}

export const useConditionalField = ({name, value, conditionValue, checkType, valueType, visibleIf}) => {
    if(valueType === VALUE_TYPE.OBJECT){
        value = get(value, name, "")
    }

    const evaluateConditionFunc = EVALUATE_CONDITION_FUNCS[checkType]
    if(!evaluateConditionFunc) throw new Error(`No function defined for checkType: ${checkType}`)

    const conditionMet = evaluateConditionFunc(value, conditionValue)

    return {
        isHidden: (visibleIf && !conditionMet) || (!visibleIf && conditionMet),
    }
}