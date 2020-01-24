import React from "react";
import { connect } from "react-redux";
import { pressIncrement, pressDecrement } from "../actions";

const Counter = (props) => {
  return (
    <div>
      <button className="increment" onClick={props.pressIncrement(props.count)}>
        Increment
      </button>
      <button className="decrement" onClick={props.pressIncrement(props.count)}>
        Decrement
      </button>
      Current count: <span>0</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.count);
  return { count: state.count };
}

export default connect(mapStateToProps,{pressIncrement,pressDecrement})(Counter)