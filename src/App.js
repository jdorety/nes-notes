import React, { Component } from "react";
import axios from "axios";
import ListNotes from "./components/ListNotes";
import "./App.css";
import "./CSS/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        console.log(response);
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <ListNotes list={this.state.notes} />
      </div>
    );
  }
}

export default App;
