export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'
export const DELETE_TODO = 'TOGGLE_ACTIVE'
export const START_EDIT = 'START_EDIT'

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const toggleTodo = (id, checked) => ({
    type: TOGGLE_ACTIVE,
    payload: { id, checked }
})

export const deleteToto = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const startEdit = () => ({
    type: START_EDIT,
})