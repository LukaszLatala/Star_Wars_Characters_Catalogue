import React, { Component } from "react";
import "./Header.css";
import logo from "../../assets/images/startwars-name.png";
export default class NavHeader extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img className="App-header-img" src={logo} alt="Star Wars Logo" />
        </div>
      </div>
    );
  }
}
