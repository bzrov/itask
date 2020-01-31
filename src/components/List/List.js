import React,{useEffect,useState,useRef} from "react";
import './List.sass';

import AddCard from '../AddCard/AddCard';
import Cards from '../Cards/Cards';

import {connect} from 'react-redux';
import {removeList,editList} from '../../actions/lists';
import {Draggable } from 'react-beautiful-dnd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTimes, faCheck, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
const List = (props) => {
    const {titleList,idList,idBoard,cards: cardsKeys} = props.list
    const {index} = props
    const {cards} = props.cards
    
    const [isAddMenuOpened,setIsAddMenuOpened] = useState(false)
    const [isEditOpened,setIsEditOpened] = useState(false)
    const [editedTitleList,setEditedTitleList] = useState(titleList)

    const listEdit = {
        idList,
        editedTitleList

    }
    const [editedTitleListHeight,setEditedTitleListHeight] = useState(0)
    const listTitleEl = useRef(null)
    let listProgress = 0;
    let doneCards = 0;

    useEffect(()=>{
        setEditedTitleListHeight(listTitleEl.current.clientHeight)
    },[titleList]) 
    
    cardsKeys.forEach(card => {
        if (cards[card].doneCard){
            doneCards++;
        }
    });

    if (cardsKeys.length>=1 && doneCards>=1){
        listProgress = doneCards/cardsKeys.length*100
    }

    return (
        <Draggable draggableId={String(idList)} index={index}>
            {provided => (
                <div className="list-container"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className="lists__list list">
                        <div className="list__progress-bar" style={{width: listProgress+ '%'}}>
                            <p className="list__progress-num">{doneCards}/{cardsKeys.length}</p>
                        </div>
                        <div className="list__header">
                            <div 
                                className="list__title" 
                                onClick={()=>setIsEditOpened(true)}
                                ref={listTitleEl}
                            >
                                {titleList} ({cardsKeys.length})
                            </div>
                            <div className="list__btns">
                                <button className="list__btn-remove list__btn btn-remove btn" onClick={()=>props.removeList(props.list)}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div>
                        {
                            isEditOpened && 
                            <div className="list__edit">
                                <textarea 
                                    className="list__edit-title" 
                                    style={{height: editedTitleListHeight}}
                                    value={editedTitleList} 
                                    onChange={(e)=>{setEditedTitleList(e.target.value)}} />
                                <div className="list__edit-btns">
                                    <button className="list__edit-btn-save btn-save" onClick={()=>{
                                        props.editList(listEdit)
                                        setIsEditOpened(false)
                                        }}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                    <button className="list__edit-btn-close btn-close " onClick={()=>{setIsEditOpened(false)}}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                        }
                        <Cards cardsKeys={cardsKeys} isAddMenuOpened={isAddMenuOpened} idList={idList}/>
                        
                        {
                            !isAddMenuOpened &&
                                <div className="open-add-card" onClick={()=>setIsAddMenuOpened(true)}>
                                    <p>  
                                        Добавить еще карточку <FontAwesomeIcon icon={faPlusCircle} />
                                    </p> 
                                </div>
                        }
                        {
                        isAddMenuOpened&& 
                            <div className="list__add-card">
                                    <AddCard idList={idList} idBoard={idBoard}/>
                                    <div className="close-add-card btn-close " onClick={()=>setIsAddMenuOpened(false)}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </div>
                            </div>
                        }
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
    removeList: list => dispatch(removeList(list)),
    editList: list => dispatch(editList(list)),
})

export default connect(mapStateToProps,mapDispatchToProps)(List)





