import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CardR(props) {
  return (
    <Card className="mx-4 mt-5" style={{ width: "18rem" }}>
      <Card.Img className="img-card" variant="top" src={props.urlToImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
