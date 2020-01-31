const ADD_BOARD = "ADD_BOARD"
const REMOVE_BOARD = "REMOVE_BOARD"
const CHANGE_THEME = "CHANGE_THEME"

export const addBoard  = board => ({
    type: ADD_BOARD,    
    payload: board
})
export const removeBoard  = board => ({
    type: REMOVE_BOARD,    
    payload: board
})

export const changeTheme  = theme => ({
    type: CHANGE_THEME,    
    payload: theme
})
