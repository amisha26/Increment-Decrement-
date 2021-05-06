import React from 'react';

const IncrDecr = () => {
    state = {
        count:0
    };
    Increment = () => {
        this.setState({count : this.state.count + 1});
    }
    return (
        <div>
        <button onClick= {this.Increment} style = {this.styles} className = "btn btn-secondary btn-sm">Increment</button>
        </div>
    )
};

export default IncrDecr;
