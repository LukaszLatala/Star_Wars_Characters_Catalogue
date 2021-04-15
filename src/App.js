import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import People from "./components/People/People";
import Home from "./components/Home/Home";

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
        <Navbar />
        <Container style={{ margin: 20 }}>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted> Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People data={people} showDetails={people} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </>
  );
};

export default App;
