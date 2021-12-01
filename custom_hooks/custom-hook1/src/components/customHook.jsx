import { Timeout } from "./TimeInterval";

export default function () {
  const isReady = Timeout(5000);

  return (
    <div>
      <h1>Custom Timer Hook Represent</h1>
      {isReady && "Custom hooks appear after 5 secs"}
    </div>
  );
}
