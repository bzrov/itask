import React from "react";
import './Cards.sass'
import Card from '../Card/Card';
import {connect} from 'react-redux';
import {Droppable } from 'react-beautiful-dnd';
const Cards = (props) => {
    const {cardsKeys,isAddMenuOpened} = props
    const {cards} = props.cards
    const {idList} =props

    return (
        <Droppable droppableId={String(idList)} type="card">
            {provided=>(
                <div 
                    {...provided.droppableProps} 
                    ref={provided.innerRef} 
                    className={`cards ${isAddMenuOpened?"cards_min":""}`}
                >
                    {cardsKeys.map((cardKey,idx)=>{
                        const card = cards[cardKey]
                            return(
                                <Card card={card} key={cardKey} index={idx}/>
                            )
                        })}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}
const mapStateToProps = (state) =>({
    ...state
})


export default connect(mapStateToProps)(Cards)





