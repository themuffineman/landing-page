import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue: boolean) => {
  
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  // State to keep track of the current value
  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
