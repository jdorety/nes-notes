import React from "react";
import { Container } from "nes-react";
import "../CSS/index.css";

export default function NoteThumbNail(props) {
  return (
    <Container title={props.title} className="note-thumb">
      <p>{props.textBody}</p>
    </Container>
  );
}
