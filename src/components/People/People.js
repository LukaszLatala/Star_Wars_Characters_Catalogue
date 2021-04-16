import React from "react";
import { Card } from "semantic-ui-react";
import "./People.css";

export default function People({ data }) {
  return (
    <>
      <div className="characters_wrapper">
        <div className="header_wrapper">
          <h1>Characters</h1>
          <button>Add Characters</button>
        </div>

        <div className="card_wrapper">
          {/* itemsPerRow={5} */}
          <Card.Group>
            {data.map((people, i) => {
              return (
                <div className="card">
                  <Card color="red" key={i}>
                    <Card.Content>
                      <Card.Header>{people.name}</Card.Header>
                      <Card.Description>
                        <p> Gender: {people.gender}</p>
                        <p> Birth year: {people.birth_year}</p>
                      </Card.Description>
                      <button className="show_details_button">
                        Show details
                      </button>
                    </Card.Content>
                  </Card>
                </div>
              );
            })}
          </Card.Group>
        </div>
      </div>
    </>
  );
}
