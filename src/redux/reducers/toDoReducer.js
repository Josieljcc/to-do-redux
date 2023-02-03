import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  REQUEST_OK,
  REQUEST_STARTED,
  START_EDIT,
  TOGGLE_ACTIVE,
} from "../actions/toDoActions";

const INITIAL_STATE = {
  todos: [],
  isEditing: false,
  idToEdit: 0,
  isFetching: false,
  color: "",
};

const toDoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EDIT_TODO:
      return {
        ...state,
        // todos: state.todos.reduce(() => {}, [])
        todos: state.todos.reduce((newTodos, currentTodo) => {
          if (currentTodo.id === payload.id) {
            return [...newTodos, payload];
          } else {
            return [...newTodos, currentTodo];
          }
        }, []),
        isEditing: false,
      };
    case START_EDIT:
      return { ...state, isEditing: true, idToEdit: payload };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case TOGGLE_ACTIVE:
      state.todos[payload.id].active = payload.checked;
      return state;
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case REQUEST_STARTED:
      return { ...state, isFetching: true };
    case REQUEST_OK:
      console.log(payload);
      return { ...state, isFetching: false, color: `#${payload}` };
    default:
      return state;
  }
};

export default toDoReducer;
