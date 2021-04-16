import React, { Component } from "react";
import "./Header.css";
export default class NavHeader extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img
            className="App-header-img"
            src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"
            alt="Star Wars Logo"
          ></img>
        </div>
      </div>
    );
  }
}
