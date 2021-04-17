import React from "react";
import { Card } from "semantic-ui-react";
import "./People.css";
import { Link } from "react-router-dom";

export default function People(props) {
  return (
    <>
      <div className="characters_wrapper">
        <div className="header_wrapper">
          <h1 className="header_item">Characters</h1>
          <button onClick={props.getNextPage}>Add Characters</button>
        </div>

        <div className="card_wrapper">
          {/* itemsPerRow={5} */}
          <Card.Group>
            {props.data.map((people, i) => {
              const { height, films, name, gender, birth_year } = people;
              return (
                <div className="card">
                  <Card color="red" key={i}>
                    <Card.Content>
                      <Card.Header>{name}</Card.Header>
                      <Card.Description>
                        <p> Gender: {gender}</p>
                        <p> Birth year: {birth_year}</p>
                      </Card.Description>
                


                      <Link
                        to={{
                          pathname: `/singleCharacter/${name}`,
                          state: {
                            name: name,
                            birth_year: birth_year,
                            height: height,
                            films: films,
                          },
                        }}
                      >
                        <button className="show_details_button">
                          Show details
                        </button>
                      </Link>
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
