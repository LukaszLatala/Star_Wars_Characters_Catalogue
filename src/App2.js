import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Header, Loader } from "semantic-ui-react";
import People from "./components/People/People";
// import Home from "./components/Home/Home";
import "./App.css";
import NavHeader from "./components/Header/Header";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";
class App2 extends Component {
  state = {
    people: [],
    page: 1,
    loadging: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.getdata();
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      // this.setState({
      // people: [prevState, this.state.people],
      // people: [],
      // films: [...new Set([...prevState.films, ...this.state.films])],
      // });

      this.getdata();
    }
  }

  getdata = () => {
    axios
      .get(
        `
          https://swapi.dev/api/people/?page=${this.state.page}
        `
      )
      .then((response) => {
        // console.log(response);
        this.setState((prevState) => ({
          loadging: false,
          people: [...prevState.people, ...response.data.results],
        }));
      });
  };
  getNextPage = () => {
    // e.preventDefault();
    this.setState((prevState) => ({
      page: prevState.page + 1,
      loadging: true,
      //   people: [prevState.people + this.state.people],
    }));
  };

  render() {
    return (
      <>
        <Router>
          {/* <Navbar /> */}
          <NavHeader />
          <Container style={{ margin: 20 }}>
            {this.loadging ? (
              <Dimmer active inverted>
                <Loader inverted> Loading</Loader>
              </Dimmer>
            ) : (
              <Switch>
                <Route exact path="/">
                  <People
                    data={this.state.people}
                    getNextPage={this.getNextPage}
                  />
                </Route>
                <Route
                  path="/singleCharacter/:name"
                  component={SingleCharacter}
                ></Route>
              </Switch>
            )}
          </Container>
        </Router>
      </>
    );
  }
}
export default App2;
