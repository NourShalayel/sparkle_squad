import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, initialState: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedData, setStoredData] = useState<T>(() => {
    try {
      const strData = localStorage.getItem(key);
      return strData ? JSON.parse(strData) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedData));
    } catch (error) {
      console.error("Failed to save to local storage:", error);
    }
  }, [storedData, key]);

  return [storedData, setStoredData];
};

export default useLocalStorage;
