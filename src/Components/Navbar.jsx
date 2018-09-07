import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light sticky-top bg-light">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <button class="btn btn-secondary btn-sm float-right">Sign Out</button>
      </nav>
    );
  }
}

export default Navbar;
