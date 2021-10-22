import React from 'react'

/**
 *
 * The key to set in localStorage for this value
 * @param {String} key
 * The value to use if it is not already in localStorage
 * @param {Object} defaultValue
 * The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 * @param {{serialize: Function, deserialize: Function}} options 
 */

export const useLocalStorageState = (
  key,
  defaultValue = '',
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) => {
  const [state, setState] = React.useState(() => {
    if (typeof window !== "undefined") {
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage) {
        return deserialize(valueInLocalStorage)
      }
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue
    }
  })

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}
