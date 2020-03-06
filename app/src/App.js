import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchJokes } from "./actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faHatCowboy
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  componentDidMount() {
    this.props.fetchJokes();
  }

  render() {
    return (
      <div className="app-wrapper">
        <header>
          <h1 className="title">Welcome to Jokes</h1>
        </header>
        {this.props.fetchingJokes ? (
          <h3>
            We're fetching your jokes...
            <FontAwesomeIcon icon={faHatCowboy} />
          </h3>
        ) : (
          <div className="jokes card">
            {this.props.jokes.map(joke => {
              return (
                <div key={Date.now() * Math.random()} className="card is-child">
                  <span className="tag is-danger ">{joke.type}</span>

                  <p className="setup">{joke.setup}</p>
                  <p className="punchline">{joke.punchline}</p>
                </div>
              );
            })}
          </div>
        )}
        {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // our state machine is working for us based on fetching, success, and error. lets make sure our component knows about the state machine
    jokes: state.jokes, // jokes for when we have the data!
    joke: state.joke,
    error: state.error, // error for when we mispell something!
    fetchingJokes: state.fetchingJokes // pending state, the fetching spinner or loading message etc. for when we're fetching!
  };
};

export default connect(mapStateToProps, { fetchJokes })(App);
