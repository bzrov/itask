import React from "react";
import './Boards.sass';
import { BrowserRouter as Router, Link} from "react-router-dom";
import {removeBoard} from '../../actions/boards';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Boards = (props) => {
    const {boards} = props.boards
    const boardsArr = []&&boards && Object.values(boards)
    

        return (
            <div className="boards">
                <div className="boards__list">
                    {boardsArr.map((board,idx)=>{
                        return (
                            <Link 
                                to={{
                                    pathname: `/itask/#/boards/${board.id}`,
                                    board,
                                }} key={idx}
                                className="board__list-link">
                                <div className="boards__item " key={idx}>
                                    <button className="board__btn board__btn-remove btn-remove btn" onClick={()=> props.removeBoard(board.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                    <div className="topic-boards_mini">
                                        <p>{board.topicBoard}</p>
                                    </div>
                                    <div className="title-boards_mini">
                                        <p>{board.titleBoard}</p>
                                    </div>
                                </div>
                            </Link> 
                        )
                    })}
                </div>
            </div>
        );
}

const mapStateToProps = (state) =>({
    ...state
})
const mapDispatchToProps = dispatch =>({
    removeBoard: board => dispatch(removeBoard(board)),
})


export default connect(mapStateToProps,mapDispatchToProps)(Boards)