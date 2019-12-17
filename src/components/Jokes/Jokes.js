import React, { Component } from "react";
import "./Jokes.css";

//todo: endless scroll for jokes
class Jokes extends Component {
  state = { jokes: [], joke: "" };

  //async call after component nounted so it won't block the UI
  componentDidMount() {
    this.fetchOneJoke();
    //this.fetchJokes();
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ jokes: json });
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
      <div>
        <h2>Programming jokes, dad jokes etc..</h2>
        <div>
          {this.state.joke.setup} <em>{this.state.joke.punchline}</em>
        </div>
        <div className="jokes">
          {jokes.map(joke => {
            return (
              <div key={joke.id}>
                {joke.setup} <em>{joke.punchline}</em>
              </div>
            );
          })}
        </div>
        <button onClick={this.fetchJokes} className="btn read-more">Read more</button>
      </div>
    );
  }
}

export default Jokes;
