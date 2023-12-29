import React, { Component } from "react";
import Navabr from "./nabvar";
import Counters from "./counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
    ],
  };

  reset = () => {
    let counters = [...this.state.counters].map((c) => c.value = 0);

    this.setState(counters);
  };

  handleDelete = (id) => {
    let counters = this.state.counters.filter((c) => c.id !== id);

    this.setState({counters});

  };
  
  handleIncrement = (id) => {
    let counters = [...this.state.counters].map((c) => {
      if (c.id === id) c.value++;
      return c;
    });
    
    this.setState({counters});
  };
  
  handleDecriment = (id) => {
    let counters = [...this.state.counters].map((c) => {
      if (c.id === id) c.value--;
      return c;
    });
    
    this.setState({counters});
  };

  render() {
    return (
      <React.Fragment>
        <Navabr total={this.state.counters.filter(c => c.value > 0).length}/>

        <Counters
          counters={this.state.counters}
          onReset={this.reset}
          onDeleter={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecriment={this.handleDecriment}
        />
      </React.Fragment>
    );
  }
}

export default App;
