import React from "react";
import { connect } from "react-redux";


const Counter = ({count}) => {
  return (
    <div>
      <button className="increment" onClick={count}>
        Increment
      </button>
      <button className="decrement" onClick={count}>
        Decrement
      </button>
      Current count: <span>0</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
}

export default connect(mapStateToProps)(Counter)