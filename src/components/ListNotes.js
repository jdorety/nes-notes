import React from "react";
import { Container } from "nes-react";
import NoteThumbNail from "./NoteThumbNail";

import "../CSS/index.css";

export default function(props) {
  return (
    <Container title="Your Notes:" className="list-notes">
      <div className="list-wrapper">
        {props.list.map(note => (
          <NoteThumbNail {...note} key={note._id} />
        ))}
      </div>
    </Container>
  );
}
