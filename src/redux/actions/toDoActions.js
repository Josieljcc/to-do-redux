export const ADD_TODO = "ADD_TODO";
export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";
export const DELETE_TODO = "DELETE_TODO";
export const START_EDIT = "START_EDIT";
export const EDIT_TODO = "EDIT_TODO";
export const REQUEST_STARTED = "REQUEST_STARTED";
export const REQUEST_OK = "REQUEST_OK";

export const actionAddTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const actionToggleTodo = (id, checked) => ({
  type: TOGGLE_ACTIVE,
  payload: { id, checked },
});

export const actionDeleteToto = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const actionStartEdit = (id) => ({
  type: START_EDIT,
  payload: id,
});

export const actionEdit = (todo) => ({
  type: EDIT_TODO,
  payload: todo,
});

export const requestStarted = () => ({
  type: REQUEST_STARTED,
});

export const requestOk = (color) => ({
  type: REQUEST_OK,
  payload: color,
});

export const fetchColor = () => {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch("http://localhost:3001/color")
      .then((response) => response.json())
      .then((data) => dispatch(requestOk(data.color)));
  };
};
