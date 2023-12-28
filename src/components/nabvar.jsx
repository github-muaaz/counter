import { Component } from "react";

class Navabr extends Component {

  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href='#'>
            Navbar

            <span className="badge badge-secondary">{this.props.total}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navabr;