const initialState ={
    status: "",
    cards: {

    },
}


export default (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_CARD':
            if (!action.payload.textCard)  return {...state,status: "Введите название доски"}
            else {
                const card = {
                    ...action.payload,
                }
                state.cards[action.payload.idCard] = card
                return {
                    ...state,
                }
            }
        case 'EDIT_CARD': 
            action.payload.editedText&& (state.cards[action.payload.idCard].textCard = action.payload.editedText)
            state.cards[action.payload.idCard].cardPriority = action.payload.editedPriority
            return{
                ...state,
            }
        case 'DONE_CARD': 
            state.cards[action.payload].doneCard= !state.cards[action.payload].doneCard
            return{
                ...state,
            }
            
        case 'REMOVE_BOARD':
            for (const cardKey in state.cards){
                if (state.cards[cardKey].idBoard === action.payload){
                    delete state.cards[cardKey]
                }
            }
            return {
                ...state
            }
        case 'REMOVE_LIST':
            const {cards: listCards} = action.payload
            const {cards} = state
            listCards.forEach((listCard)=>{
                delete cards[listCard]
            })
            return {
                ...state
            }
        case 'REMOVE_CARD':
            const {idCard} = action.payload
            delete state.cards[idCard]
            return {
                ...state
            }
        
        default: 
            return state
    }
}

