import {uuid} from "uuidv4";

const initialState ={
    status: "",
    theme: "dark",
    boards: {

    },
}


export default (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_BOARD':
            if (!action.payload.titleBoard)  return {...state,status: "Введите название доски"}
            else if (!action.payload.topicBoard)  return {...state,status: "Введите тему доски"}
            else {
                const id=uuid()

                const board = {
                    id,
                    ...action.payload,
                    lists: [],
                }

                state.boards[id] = board
                return {
                    ...state,
                }
            }
        case "ADD_LIST":
                if (!action.payload.titleList)  return {...state,status: "Введите название списка"}
                
                else {

                    
                    const {idBoard,idList} = action.payload
                    const board = state.boards[idBoard]

                    const newLists = [...board.lists, idList]

                    board.lists = newLists
                    
                   
                    return {
                        ...state,
                        boards: {
                            ...state.boards,
                            [idBoard] : board
                        }
                    }
                }
        case 'REMOVE_BOARD':
                delete state.boards[action.payload]
                return {
                    ...state,
                }
        case 'REMOVE_LIST':
                const {idBoard,idList} = action.payload
                const idLists = state.boards[idBoard].lists
                const idxIdList = idLists.indexOf(idList)
                idLists.splice(idxIdList, 1)
                return {
                    ...state,
                }
        case 'DRAG_EVENT': {
            const { idBoard } = action.payload;
            const board = state.boards[idBoard];
            const lists = board.lists;
            const {
                droppableIndexEnd,
                droppableIndexStart,
                type
            } = action.payload;
           
            // draggin lists around
            if (type === "list") {
                const pulledOutList = lists.splice(droppableIndexStart, 1);
                lists.splice(droppableIndexEnd, 0, ...pulledOutList);
                board.lists = lists;
                return { 
                    ...state, 
                    boards:{
                        ...state.boards,
                        [idBoard]: board
                    }
                    
                };
            }
        }
        case 'CHANGE_THEME':
                return {
                    ...state,
                    theme: action.payload
                }
        default: 
            return state
    }
}

