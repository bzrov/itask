import React from "react";
import './BoardContent.sass';
import Lists from '../Lists/Lists';
import { DragDropContext } from 'react-beautiful-dnd';
import {dragEvent} from '../../actions/cards';
import {connect} from 'react-redux';
const BoardContent = (props) => {
    const {id: idBoard ,lists: listsKeys} = props.board

    const onDragEnd = (result) => {
        const {destination, source,draggabledId,type} = result;

        if(!destination) return;

        props.dragEvent(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggabledId,
            type,
            idBoard,
        )

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board-content">
                <Lists listsKeys={listsKeys} idBoard={idBoard}/>
            </div>     
        </DragDropContext>       
    );
}

const mapStateToProps = (state) =>({
    ...state
})
const mapDispatchToProps = dispatch =>({
    dragEvent: (
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        idBoard
        ) => dispatch(dragEvent(
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type,
            idBoard
        )),
})

export default connect(mapStateToProps,mapDispatchToProps)(BoardContent)






   