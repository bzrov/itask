const ADD_LIST = "ADD_LIST"
const REMOVE_LIST = "REMOVE_LIST"
const EDIT_LIST = "EDIT_LIST"



export const addList = list => ({
    type: ADD_LIST,    
    payload: list
})

export const removeList = list => ({
    type: REMOVE_LIST,    
    payload: list
})

export const editList = list => ({
    type: EDIT_LIST,    
    payload: list
})






