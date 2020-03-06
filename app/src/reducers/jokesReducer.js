import { FETCHING_JOKES, JOKES_FETCH_SUCCESS, JOKES_FETCH_ERROR } from "../actions";

const initialState = {
   jokes: [],
   joke: {
      id:"",
      type:"",
      setup:"",
      punchline: ""

   },
    fetchingJokes: false, error: "" 
  };

export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOKES:
      return Object.assign({}, state, { fetchingJokes: true }); // if we're fetching simply trigger the boolean!
    case JOKES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        jokes: [...state.jokes, ...action.payload], // if our promise was successfull, build out the jokes array.
        fetchingJokes: false // also, set our boolean to false, because we're no longer fetching
      });
    case JOKES_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingJokes: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching Jokes" // now we're getting an error back, set the error as we'd see fit
      });
    default:
      return state;
  }
};

// fetching
// feteched
// errorFetching
