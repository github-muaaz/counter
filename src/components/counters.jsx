import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters } = this.props;

    return (
      <div style={{width: 'fit-content', backgroundColor: 'red'}}>
        <button onClick={() => this.props.onReset()} className="btn btn-primary m-4">reset</button>

        <div>
          {counters.map((counter) => (
            <Counter key={counter.id} counter={counter} funs={{ ...this.props }} />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
