import React from "react";
import { connect } from "react-redux";
import { pressIncrement, pressDecrement } from "../actions";

const Counter = (props) => {
  return (
    <div>
      <button className="increment" onClick={props.pressIncrement}>
        Increment
      </button>
      <button className="decrement" onClick={props.pressDecrement}>
        Decrement
      </button>
      Current count: <span>{props.count}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("From Counter:",state)
  return { count: state.count };
}

export default connect(mapStateToProps, { pressIncrement, pressDecrement })(Counter);