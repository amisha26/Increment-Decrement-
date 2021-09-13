import React, { useState } from "react";
import { Button } from "react-bootstrap";

const IncrDecr = () => {
  //initial value define in usestate, count takes initial value, setCount takes updated value
  const [count, setCount] = useState(0);

  const Incr = () => {
    setCount(count + 1);
  };

  const Decr = () => {
    setCount(count - 1);
  };

  return (
    <div className="main">
      <div className="main-head">
        <h1>{count}</h1>
      </div>
      <div className="main-button">
        <Button onClick={Incr} variant="success">
          Increment
        </Button>
        <Button onClick={Decr} variant="danger">
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default IncrDecr;
