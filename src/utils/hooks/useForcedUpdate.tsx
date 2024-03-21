import { useCallback, useState } from "react";

export const useForcedUpdate = () => {
  const [_, setCount] = useState(0);
  const forceUpdate = useCallback(() => setCount((count) => count + 1), []);
  return forceUpdate;
};
