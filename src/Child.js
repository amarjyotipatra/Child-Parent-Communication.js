import React, { useState } from "react";

const Parent = () => {
  const [value, setValue] = useState("24356");

  const handleChildData = (data) => {
    setValue(data);
  };
  return (
    <div>
      <Child onChildData={handleChildData} />
      <p>Data from child: {value}</p>
    </div>
  );
};
const Child = (props) => {
  const handleClick = () => {
    props.onChildData("Hello from child!");
  };

  return <button onClick={handleClick}>Send Data</button>;
};

export default Parent;
