import React,{useState} from "react";
import ReactDOM from 'react-dom';
import './AddBoard.sass';
import {addBoard} from '../../actions/boards';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const AddBoard = (props) => {

        const [isModalActive,setIsModalActive]=useState(false)
        const [inputTitleBoard,setInputTitleBoard] = useState("")
        const [inputTopicBoard,setInputTopicBoard] = useState("")
        const board ={
            titleBoard: inputTitleBoard,
            topicBoard: inputTopicBoard,
        }

        return (
            <div className="add-board">
                {!isModalActive && 
                    <button className="add-board__btn-add add-board__btn-open" onClick={()=> setIsModalActive(true)}>
                        +
                    </button>
                }
                {
                    isModalActive && 
                    ReactDOM.createPortal(
                        <div className="modal">
                            <div className={`add-board__modal window-modal`}>
                                <button className="modal__btn-close btn-close" onClick={()=> setIsModalActive(false)}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>  
                                <input className="add-board__title-board" placeholder="Введите название доски" onChange={(e)=>{setInputTitleBoard(e.target.value)}}>

                                </input>
                                <input className="add-board__topic-board" placeholder="Введите тему " onChange={(e)=>{setInputTopicBoard(e.target.value)}}>

                                </input>
                                <button className="add-board__btn-save btn-save" onClick={()=>{
                                    props.addBoard(board)

                                    inputTitleBoard&&inputTopicBoard&&setIsModalActive(false)
                                    }}>
                                    Добавить 
                                </button>
                                

                            </div>
                        </div>
                        ,
                        document.getElementById("window-overlay")
                    )
                }
                
            </div>
        );
}

const mapStateToProps = (state) =>({
    ...state
})
const mapDispatchToProps = dispatch =>({
    addBoard: board => dispatch(addBoard(board)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AddBoard)