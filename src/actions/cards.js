const ADD_CARD = "ADD_CARD"
const REMOVE_CARD = "REMOVE_CARD"
const EDIT_CARD = "EDIT_CARD"
const DRAG_EVENT = "DRAG_EVENT"
const DONE_CARD = "DONE_CARD"
export const addCard  = card => ({
    type: ADD_CARD,    
    payload: card
})

export const removeCard  = card => ({
    type: REMOVE_CARD,    
    payload: card
})

export const editCard  = card => ({
    type: EDIT_CARD,    
    payload: card
})

export const doneCard  = card => ({
    type: DONE_CARD,    
    payload: card
})
export const dragEvent  = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type,
    idBoard
) => ({
    type: DRAG_EVENT,    
    payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        idBoard
    }
})




