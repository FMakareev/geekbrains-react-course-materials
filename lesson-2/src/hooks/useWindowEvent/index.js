import {useEffect} from "react";


export const useWindowEvent = (type, listener, options) => {
  useEffect(() => {
    if (typeof listener !== 'function') {
      console.warn('listener is not a function');
      return undefined;
    }
    window.addEventListener(type, listener, options);
    return () => {
      window.removeEventListener(type, listener, options);
    }
  }, [])
}