import { useEffect } from "react";

const ComponentB = ({ value }) => {
  useEffect(() => {
    if (typeof value !== "string") {
      throw new Error(
        `'value' expected to be "string". Received "${typeof value}".`
      );
    }
  }, [value]);

  return <div style={{ fontSize: 20 }}>{value}</div>;
};

export default ComponentB;
