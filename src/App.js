import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Header, Loader } from "semantic-ui-react";
import People from "./components/People/People";
import Home from "./components/Home/Home";
import "./App.css";
import NavHeader from "./components/Header/Header";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";

const App = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoagind] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people");
      let data = await res.json();
      setPeople(data.results);
      setLoagind(false);
    }

    fetchPeople();
  }, []);

  console.log("people", people);

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <NavHeader />
        <Container style={{ margin: 20 }}>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted> Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <People data={people} />
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
};

export default App;
