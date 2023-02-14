import React, { useState } from "react";
import Button from "./../componets/Button";
import Panel from "./../componets/Panel";

const StateCounter = () => {
  const [count, setCount] = useState(0);
  const [valuetoAdd, setValuetoAdd] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValuetoAdd(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + valuetoAdd);
    setValuetoAdd(0);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot </label>
        <input
          value={valuetoAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray border border-gray-300"
        ></input>
        <Button onSubmit={handleSubmit}>Submit</Button>
      </form>
    </Panel>
  );
};

export default StateCounter;
