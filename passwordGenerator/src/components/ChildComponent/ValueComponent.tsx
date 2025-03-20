import React from "react";

// react.memo cache the value it does not call the component untill the props changes
const ValueComponent = React.memo((props: { value: number }) => {
  console.log("Value Component called");
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
});
export default ValueComponent;
