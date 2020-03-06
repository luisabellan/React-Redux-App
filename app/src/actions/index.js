import axios from "axios";

export const FETCHING_JOKES = "FETCHING_JOKES";
export const JOKES_FETCH_SUCCESS = "JOKES_FETCH_SUCCESS";
export const JOKES_FETCH_ERROR = "JOKES_FETCH_ERROR";
// Those three types above are all a representation of our State Machine
// fetching, resolve, reject... etc. : ) Start to notice this pattern. You'll use it constantly in redux!

export const fetchJokes = () => {
  const promise = axios.get(`https://official-joke-api.appspot.com/random_ten`);
  return dispatch => {
    dispatch({ type: FETCHING_JOKES }); // first state of 'fetching' is dispatched
    promise
      .then(response => {
        dispatch({ type: JOKES_FETCH_SUCCESS, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: JOKES_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
      });
  };
};
