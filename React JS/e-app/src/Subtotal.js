import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
const Subtotal = () => {
  return (
    <CurrencyFormat
      value={0}
      decimalScale={2}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      renderText={(value) => (
        <div>
          <p>
            Subtotal (0 items) : <strong>$0</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox"/> This order contains a gift
          </small>
        </div>
      )}
    />
  );
};

export default Subtotal;
