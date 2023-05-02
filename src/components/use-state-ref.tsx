import { useRef, useState } from 'react';
const useStateRef = <T,>(val: T) => {
  const [value, setValue] = useState<T>(val);
  const stateRef = useRef(value);
  const setStateRef = (_value: T) => {
    stateRef.current = _value;
    setValue(_value);
  };
  return [stateRef, setStateRef] as const;
};
export default useStateRef;
