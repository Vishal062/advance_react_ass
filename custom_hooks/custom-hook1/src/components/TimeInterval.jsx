import { useState, useEffect } from "react";

export function Timeout(delay) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let time = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(time);
  }, []);

  return ready;
}
