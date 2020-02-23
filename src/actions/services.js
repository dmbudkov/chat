import history from "../utils/history";
import * as types from "../constants/services";

export function redirect(to) {
  return (dispatch) => {
    history.push(`${process.env.PUBLIC_URL}/${to}`);
    dispatch({
      type: types.REDIRECT,
      payload: { to }
    })
  }
}

export function filterApply(searchWord) {
  return {
    type: types.SEARCH_FILTER_APPLY,
    payload: searchWord,
  }
}