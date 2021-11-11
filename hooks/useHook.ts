import { useState } from 'react'

export default function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState<any>(defaultValue)

  function toggleValue(val: boolean | string) {
    setValue((currentValue: any) => (typeof val === 'boolean' ? val : !currentValue))
  }

  return [value, toggleValue]
}
