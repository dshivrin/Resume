import React, { Component } from "react";
import "./Jokes.css";

class Jokes extends Component {
  state = { jokes: [], joke: "" };

  //async call after component nounted so it won't block the UI
  componentDidMount() {
    this.fetchOneJoke();
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => {
        return response.json();
      })
      .then(json => {
        let jokes = this.state.jokes;
        if(json){
          let set = new Set(jokes.concat(json));
          jokes = Array.from(set);
        }
        this.setState({ jokes });
      })
      .catch(error => console.log(error));
  };

  fetchOneJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ joke: json });
      })
      .catch(error => console.log(error));
  };

  render() {
    const jokes = this.state.jokes;

    return (
      <div className="container">
        <h2>Programming jokes, dad jokes etc..</h2>
        <div className="joke">
          {this.state.joke.setup} <em>{this.state.joke.punchline}</em>
        </div>
        <hr />
        <div className="jokes">
          {jokes.map(joke => {
            return (
              <div className="joke" key={joke.id}>
                {joke.setup} <em>{joke.punchline}</em>
                <hr />
              </div>
            );
          })}
        </div>
        <button onClick={this.fetchJokes} className="btn read-more">
          Read more
        </button>
      </div>
    );
  }
}

export default Jokes;
