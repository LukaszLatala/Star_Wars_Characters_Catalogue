import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import "./SingleCharacter.css";

const SingleCharacter = (props) => {
  console.log(props);
  const { name, birth_year, height, films } = props.location.state;
  return (
    <>
      <div className="container">
        <h1 className="header_item">Single Character</h1>
        <Link to="/">
          <button className="return_button">Return </button>
        </Link>
        <Card.Group>
          <Card
            fluid
            color="red"
            header={name}
            className="singlelist_container"
          >
            <h1>{name}</h1>
            <p>Age: {birth_year}</p>
            <p>Height: {height}</p>
            <p className="filmList">
              {" "}
              <strong> Films:</strong>
            </p>
            <ul>
              {films.map((film) => (
                <li>{film}</li>
              ))}
            </ul>
          </Card>
        </Card.Group>
      </div>
    </>
  );
};

export default SingleCharacter;
