import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchJokes } from "./actions";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHatCowboy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCheckSquare, faCoffee)


class App extends Component {
  componentDidMount() {
    this.props.fetchJokes();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Jokes</h1>
        </header>
        {this.props.fetchingJokes ? (
          <h3>We're fetching your jokes...<FontAwesomeIcon icon={faHatCowboy} /></h3>
        ) : (
          <div className="App-intro">
          {this.props.jokes.map(joke => {
              return (
                <div key={Date.now() * Math.random()} className="">
                
                <h2>{joke.type}</h2>


                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
                </div>
              )
              
           
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
