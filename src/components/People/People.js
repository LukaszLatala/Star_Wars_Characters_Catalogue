import React from "react";
import { Card } from "semantic-ui-react";
import "./People.css";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export default function People(props) {
  return (
    <>
      <div className="characters_wrapper">
        <div className="header_wrapper">
          <h1 className="header_item">Characters</h1>
          <button onClick={props.getNextPage} className="loader_button">
            Load more Characters
          </button>
          {/* <button onClick={props.restart} className="loader_button">
            Restart data
          </button> */}
        </div>
        <div className="card_wrapper">
          <Card.Group className="card_wrapper">
            <InfiniteScroll
              dataLength={props.data.length}
              next={props.getNextPage}
              hasMore={true}
              className="card_element"
            >
              {props.data.slice(0, props.number).map((people, i) => {
                const { height, films, name, gender, birth_year } = people;

                return (
                  <div className="card">
                    <Card color="red" key={i} className="card_element">
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
            </InfiniteScroll>
          </Card.Group>
        </div>
      </div>
    </>
  );
}
