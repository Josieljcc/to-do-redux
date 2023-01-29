import { ADD_TODO, DELETE_TODO, START_EDIT, TOGGLE_ACTIVE } from "../actions/toDoActions";

const INITIAL_STATE = {
    todos: [],
    isEditing: false,
}


const toDoReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case START_EDIT:
            return {...state, isEditing: true}
        case DELETE_TODO:
            return{...state ,todos: state.todos.filter((todo) => todo.id !== payload)}
        case TOGGLE_ACTIVE:
            state.todos[payload.id].active = payload.checked ;
            return state;
        case ADD_TODO:
            return {...state, todos: [...state.todos, payload   ]}
        default:
           return state;
    }
}

export default toDoReducer;