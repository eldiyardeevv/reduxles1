import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { money } = useSelector((s) => s);
  const dispatch = useDispatch();
  function addMoney() {
    dispatch({ type: "ADD_MONEY" });
  }
  function takeMoney() {
    dispatch({ type: "TAKE_MONEY" });
  }
  function resestReemov() {
    dispatch({ type: "REMOVE_RESET" });
  }
  return (
    <div>
      <div>
        <button className="btn1" onClick={() => addMoney()}>
          +
        </button>
        <h1>{money}</h1>
        <button className="btn2" onClick={() => takeMoney()}>
          -
        </button>
      </div>
      <button className="btn3" onClick={() => resestReemov()}>
        reset
      </button>
    </div>
  );
};

export default Header;
