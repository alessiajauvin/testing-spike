import { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [someState, setSomeState] = useState(1);

  const handleClick = () => {
    setSomeState((prev) => prev + 1);
  };

  return (
    <>
      <ComponentB value={someState} />
      <button onClick={handleClick}>Click me!</button>
    </>
  );
};

export default ComponentA;
