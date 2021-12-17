import { useCallback, useState } from "react";

export const useForceUpdate = () => {
  const [state, setState] = useState(0);

  const forceUpdate = useCallback(() => {
    setState((state) => state + 1);
  }, []);

  return [state, forceUpdate];
};
