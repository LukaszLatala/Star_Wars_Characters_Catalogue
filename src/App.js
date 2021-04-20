import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import People from "./components/People/People";
import "./App.css";
import NavHeader from "./components/Header/Header";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";

class App extends Component {
  state = {
    people: [],
    page: 1,
    loading: true,
    number: 10,
  };

  componentDidMount() {
    setTimeout(() => {
      this.getdata();
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      setTimeout(() => {
        this.getdata();
      }, 3000);
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
        this.setState((prevState) => ({
          loading: false,
          people: [...prevState.people, ...response.data.results],
        }));
      });
  };
  getNextPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
      loading: true,
      number: this.state.number + 5,
    }));
  };

  // restartData = () => {
  //   this.setState({
  //     page: 1,
  //     people: [],
  //     number: 10,
  //   });
  //   setTimeout(() => {
  //     this.getdata();
  //   }, 3000);
  // };

  render() {
    return (
      <>
        <Router>
          <NavHeader />
          <Container style={{ margin: 20 }}>
            <Switch>
              <Route exact path="/">
                <People
                  data={this.state.people}
                  number={this.state.number}
                  getNextPage={this.getNextPage}
                  restart={this.restartData}
                />
              </Route>
              <Route
                path="/singleCharacter/:name"
                component={SingleCharacter}
              ></Route>
            </Switch>

            {this.state.loading && (
              <Dimmer active inverted>
                <Loader inverted> Loading</Loader>
              </Dimmer>
            )}
          </Container>
        </Router>
      </>
    );
  }
}

export default App;
