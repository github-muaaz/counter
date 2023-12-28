import React from "react";
import ReactDOM from "react-dom";

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleClick = () => {
    if (!this.state.showModal) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  handleOutsideClick = e => {
    if (!this.node.contains(e.target)) this.handleClick();
  };

  render() {
    return (
      <div
        ref={node => {
          this.node = node;
        }}
      >
        <button onClick={this.handleClick}>Open Modal</button>
        {this.state.showModal && (
          <div style={{position: 'fixed',
            top: '150px',
            left: '150px',
            width: '50%',
            height: '50%',
            background: 'greenyellow'}}>
            I'm a modal!
            <button onClick={() => this.handleClick()}>close modal</button>
          </div>
        )}
      </div>
    );
  }
}

