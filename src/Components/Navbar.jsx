import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light sticky-top bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <button className="btn btn-secondary btn-sm float-right">
          Sign Out
        </button>
      </nav>
    );
  }
}

export default Navbar;
