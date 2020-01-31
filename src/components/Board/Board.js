import React,{useState,useEffect} from "react";
import './Board.sass';
import BoardsSidebar from '../BoardsSidebar/BoardsSidebar';
import BoardHeader from '../BoardHeader/BoardHeader';
import BoardContent from '../BoardContent/BoardContent';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import boardError from '../../assets/board-error.gif';

const Board = (props) => {
    
    const {pathname} = props.location
    const {boards} = props.boards
    const path = pathname.split('/')
    const id = path[path.length-1]
    const board = boards[id]
    const [burgerIsOpen, setBurgerIsOpen] = useState(true)
    const {theme} = props.boards
    useEffect(() => {
        document.body.clientWidth<998 && setBurgerIsOpen(false)
    }, [])
    if (theme==="dark"){
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    } else if(theme==="light"){
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    } 

    if (!board){
        return(
            <div className="main-page">
                {!burgerIsOpen && document.body.clientWidth<998  && <button className="btn-burger btn-open-menu" onClick={()=>setBurgerIsOpen(true) }>
                    <FontAwesomeIcon icon={faChevronRight} className="btn-burger__icon"/>
                </button>}
                {burgerIsOpen&&<BoardsSidebar setBurgerIsOpen={()=>setBurgerIsOpen()}/>}
                <div className="board-deleted">
                    <p className="board-deleted__text">Данная доска была удалена, перейдите на другую доску!</p>
                    <img className="board-deleted__img"  src={boardError} alt=""/>
                </div>
            </div>
        )
    }
    return (
        <div className="main-page">
               {!burgerIsOpen && document.body.clientWidth<998  && <button className="btn-burger btn-open-menu" onClick={()=>setBurgerIsOpen(true) }>
                    <FontAwesomeIcon icon={faChevronRight} className="btn-burger__icon"/>
                </button>
               }
                {burgerIsOpen&&<BoardsSidebar setBurgerIsOpen={()=>setBurgerIsOpen()}/>}
                <BoardHeader board={board}/>
                <BoardContent board={board} />    
        </div>
    );
}

const mapStateToProps = (state) =>({
    ...state
})

export default connect(mapStateToProps)(Board)



