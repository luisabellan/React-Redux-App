import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchlyrics } from "./lyricAction";

class App extends Component {
  componentDidMount() {
    this.props.fetchLyrics();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Lyrics</h1>
        </header>
        {this.props.fetchingLyrics ? (
          <h3>We're fetching your lyrics...</h3>
        ) : (
          <div className="App-intro">
            {this.props.lyrics.map(lyric => {
              return <img key={dog} src={dog} />;
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
    lyrics: state.lyrics, // lyrics for when we have the data!
    error: state.error, // error for when we mispell something!
    fetchingLyrics: state.fetchingLyrics // pending state, the fetching spinner or loading message etc. for when we're fetching!
  };
};

export default connect(mapStateToProps, { fetchlyrics })(App);
