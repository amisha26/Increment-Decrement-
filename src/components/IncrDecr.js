import React, { useState } from "react";
import { Button } from "react-bootstrap";

const IncrDecr = () => {
  //initial value define in usestate, count takes initial value, setCount takes updated value
  const [count, setCount] = useState(0);

  const Incr = () => {
    setCount(count + 1);
  };

  const Decr = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Decrement cannot be done");
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={Incr} variant="success">
        Increment
      </Button>
      <Button onClick={Decr} variant="danger">
        Decrement
      </Button>
      <Button
        onClick={() => {
          setCount(0);
        }}
        variant="primary"
      >
        Clear
      </Button>
    </div>
  );
};

export default IncrDecr;
