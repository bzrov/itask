import React,{useEffect,useState,useRef} from "react";
import './Card.sass';
import {removeCard,editCard,doneCard} from '../../actions/cards'

import {connect} from 'react-redux'
import {Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    const {textCard,cardPriority,idCard,doneCard} = props.card
    const {index} = props
    const [editedText,setEditedText] = useState(textCard)
    const [editedPriority,setEditedPriority]=useState(cardPriority)
    const [isEditOpened,setIsEditOpened] = useState(false)
    const cardEdit={
        idCard,
        editedText,
        editedPriority,
    }

    const [editedTextHeight,setEditedTextHeight] = useState(0)
    const cardTextEl = useRef(null)

    useEffect(()=>{
        setEditedTextHeight(cardTextEl.current.clientHeight)
    },[textCard])   
    

    return (
        <Draggable draggableId={String(idCard)} index={index} > 
            {provided => (
                <div className={`cards__card card ${doneCard?"card_done":""} ${isEditOpened?"card_editing":""}`}
                    onDoubleClick={()=>{setIsEditOpened(true)}}
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps} 
                    {...provided.draggableProps}
                >
                    <div className={`card__priority ${cardPriority.toLowerCase()}`}>
                        
                    </div>
                    <div className="card__text" ref={cardTextEl}>
                        <p>{textCard}</p>
                    </div>
                    <div className="card__done">
                        <button className="card__btn btn"
                        onClick={()=>{
                            props.doneCard(idCard)
                        }}>
                            <i className="fas fa-check"></i>
                        </button>
                    </div>
                    { isEditOpened && 
                    <div className="card__edit">       
                        <div className="card__edit-priority edit-priority">
                            <select className="edit-piority__priority-select" value={editedPriority} onChange={(e)=> setEditedPriority(e.target.value)}>
                                <option value="Default">Default</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <div className="card__edit-text edit-text" style={{height: editedTextHeight + 10}}>
                            <textarea className="edit-text__textarea"
                                    type="text" 
                                    value={editedText} 
                                    onChange={(e)=>setEditedText(e.target.value) } 
                            />    
                        </div>
                        <div className="card__edit-btns">
                            <button className="edit-text__btn btn-save" onClick={()=>{
                                props.editCard(cardEdit)
                                setIsEditOpened(false)
                                }}>
                                Сохранить изменения
                            </button>
                            <button className="edit-text__btn-close btn-close " onClick={()=>{setIsEditOpened(false)}}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        
                    </div>
                    }
                    <div className="card__btns">
                        <button className="card__btn-edit card__btn btn-edit btn" onClick={()=>{setIsEditOpened(true)}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="card__btn-remove card__btn btn-remove btn" onClick={()=>props.removeCard(props.card)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
            )}
        </Draggable>
        
    );
}
const mapStateToProps = (state) =>({
    ...state
})
const mapDispatchToProps = dispatch =>({
    removeCard: card => (dispatch(removeCard(card))),
    editCard: card=> (dispatch(editCard(card))),
    doneCard: card=>(dispatch(doneCard(card)))
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Card)





