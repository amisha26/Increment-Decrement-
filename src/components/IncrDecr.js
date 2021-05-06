import React,{useState} from 'react';
import {Button} from "react-bootstrap";

const IncrDecr = () => {
    const [count,setCount] = useState(0) //initial value define in usestate, count takes initial value, setCount takes updated value

    const Incr = () =>{
        setCount(count+1)
    }

    const Decr = () =>{
        if (count>0){
        setCount(count-1)
        }
        else{
            alert("Decrement cannot be done")
        }
    }
    return (
        <div style={{margin:"50px 0 0 0"}}>
        <h1 style={{margin:"0 0 28px 160px"}}>{count}</h1>
        <Button onClick= {Incr} variant="success" style={{margin: "0 8px 0 0" }}>Increment</Button>
        <Button onClick= {Decr} variant="danger" style={{margin: "0 8px 0 0" }}>Decrement</Button>
        <Button onClick= {() => {setCount(0)}} variant ="primary">Clear</Button>
        </div>
    )
};

export default IncrDecr;
