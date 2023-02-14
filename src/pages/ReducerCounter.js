import React, { useReducer } from "react";
import Button from "./../componets/Button";
import Panel from "./../componets/Panel";

const ReducerCounter = () => {

  const INC_COUNT = "Increment";
  const DEC_COUNT = "Decrement";
  const CHANGE_VALUE = "change-value";
  const ADD_VALUE='Add_Value'

  const reducer = (state, action) => {
    switch (action.type) {
      case INC_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DEC_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      case CHANGE_VALUE:
        return {
          ...state,
          valuetoAdd:action.paylode,
        };
        case ADD_VALUE:
            return {
              ...state,
         count: state.count + state.valuetoAdd
            };
      default:
        return state
        
    }
    
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valuetoAdd: 0,
  });

  const increment = () => {
  
    dispatch({
      type: INC_COUNT,
    });
  };
  const decrement = () => {

    dispatch({
      type: DEC_COUNT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
   
    dispatch({
      type: CHANGE_VALUE,
      paylode: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
        type:ADD_VALUE
    })
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot </label>
        <input
          value={state.valuetoAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray border border-gray-300"
        ></input>
        <Button onSubmit={handleSubmit}>Submit</Button>
      </form>
    </Panel>
  );
};

export default ReducerCounter;
