import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [value, setValue] = useState(1);

  // useCallback cache the function, it means it does not recreate a fuction untill the dependency change if we add value in dependency then it recreate a function and now value can be increased
  const Counter = useCallback(() => {
    setValue(value + 1);
  }, []);

  return (
    <div>
      <ChildComponent counter={Counter} value={value} />
    </div>
  );
}

export default ParentComponent;
