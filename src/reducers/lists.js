const initialState ={
    status: "",
    lists: {

    },
}

export default (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_LIST':
            if (!action.payload.titleList)  return {...state,status: "Введите название доски"}
            else {
                const list = {
                    ...action.payload,
                }
                state.lists[action.payload.idList] =list
                return {
                    ...state,
                }
            }
        case 'EDIT_LIST': 
            action.payload.editedTitleList&& (state.lists[action.payload.idList].titleList = action.payload.editedTitleList)
            return{
                ...state,
            }
        case 'FILTER_LIST': 
            return{
                ...state,
            }
        case 'ADD_CARD':
            if (!action.payload.textCard)  return {...state,status: "Введите задачу"}
            else {
                const {idList,idCard} = action.payload

                    const list = state.lists[idList]
                    const newCards = [...list.cards, idCard]
                    list.cards = newCards
                    
                    return {
                        ...state,
                        lists: {
                            ...state.lists,
                            [idList] : list
                        }
                    }
            }
            case 'REMOVE_BOARD':
                
                for (const listKey in state.lists){
                    if (state.lists[listKey].idBoard === action.payload){
                        delete state.lists[listKey]
                    }
                }
                return {
                    ...state
                }
            case 'REMOVE_LIST':
                const {idList} = action.payload
                delete state.lists[idList]
                return {
                    ...state
                }
            case 'REMOVE_CARD':
                const {idList: idListForCards,idCard} = action.payload
                const cards = state.lists[idListForCards].cards
                const idxIdCard = cards.indexOf(idCard)
                cards.splice(idxIdCard,1)
                return {
                    ...state
                }
            case 'DRAG_EVENT':
                const{
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId,
                    type
                } = action.payload

                if (type === "list") {
                    return state;
                  }
                else if(droppableIdStart===droppableIdEnd){
                    const list = state.lists[droppableIdStart]
                    const card = list.cards.splice(droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd,0, ...card)
                    return {
                        ...state,
                        lists: {
                            ...state.lists,
                            [droppableIdStart]: list
                        }
                    }
                }
                else if (droppableIdStart !== droppableIdEnd) {
                    const listStart = state.lists[droppableIdStart];
                    const card = listStart.cards.splice(droppableIndexStart, 1);
                    const listEnd = state.lists[droppableIdEnd];
                    listEnd.cards.splice(droppableIndexEnd, 0, ...card);
                    return {
                        ...state,
                        lists: {
                            ...state.lists,
                            [droppableIdStart]: listStart,
                            [droppableIdEnd]: listEnd
                        }
                    }
                  }
                
        default: 
            return state
    }
}

