import React from "react";
import './Lists.sass';
import List from '../List/List';
import AddList from '../AddList/AddList';
import {connect} from 'react-redux';
import {Droppable } from 'react-beautiful-dnd';


const Lists = (props) => {
    const {listsKeys,idBoard} = props
    const {lists} = props.lists


    return (
            <div className="lists">
                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                {provided => (
                        <div className="lists__wrapper"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {listsKeys.map((listKey,idx)=>{
                                return(
                                    <List list={lists[listKey]} key={listKey} index={idx}/>
                                )
                            })}
                            {provided.placeholder}
                            <AddList idBoard={idBoard}/>
                        </div>
                    )}
                </Droppable>
            </div>
    );
}
const mapStateToProps = (state) =>({
    ...state
})

export default connect(mapStateToProps)(Lists)





