import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "./People.css";
import ShowDetails from "../ShowDatils/ShowDetails";
export default function People({ data }) {
  return (
    <>
      <div className="people_container">
        <h1 className="people">People</h1>
        <Grid columns={5}>
          {data.map((people, i) => {
            console.log(i);
            return (
              <Grid.Column key={i}>
                <Card.Group className="card_container">
                  <Card fluid color="black">
                    <Card.Content>
                      <Card.Header className="header">
                        {people.name}
                      </Card.Header>
                      <Card.Description>
                        <p> Gender: {people.gender}</p>
                        <p> Birth year: {people.birth_year}</p>
                      </Card.Description>
                      <button className="button">Show details</button>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
