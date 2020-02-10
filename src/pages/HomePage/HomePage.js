import React from "react";
import '../../styles/style.sass';
import './HomePage.sass'
import AddBoard from '../../components/AddBoard/AddBoard'
import {changeTheme,removeBoard} from '../../actions/boards'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const HomePage = (props) => {
    const {boards} = props.boards
    const boardsArr = []&&boards && Object.values(boards)
    const {theme} = props.boards
    if (theme==="dark"){
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    } else if(theme==="light"){
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    } 
    const handleInputChange =(event)=>{
        const target = event.target;
        target.checked ? props.changeTheme('light') : props.changeTheme('dark');
    }
        return (
            <div className="home-page">
                <div className="home-page__header">
                    <div className="logo">
                        <Link to={{pathname: `/itask/`}} >
                            <svg width="86" height="42" viewBox="0 0 86 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70.1934 27.6471L72.3203 29.6862L79 29.6862L79 32.9382L52 32.9382L52 29.6862L68.3301 29.6862L66.2383 27.946L59.9805 22.0221L59.9805 18.0671L67.9258 25.4675L79 17.2057L79 21.0202L70.1934 27.6471Z" fill="url(#paint0_linear)"/>
                            <path d="M20.6543 10.1836H12.4277V33H9.07031V10.1836H0.861328V7.40625H20.6543V10.1836ZM33.6797 33C33.4922 32.625 33.3398 31.957 33.2227 30.9961C31.7109 32.5664 29.9062 33.3516 27.8086 33.3516C25.9336 33.3516 24.3926 32.8242 23.1855 31.7695C21.9902 30.7031 21.3926 29.3555 21.3926 27.7266C21.3926 25.7461 22.1426 24.2109 23.6426 23.1211C25.1543 22.0195 27.2754 21.4688 30.0059 21.4688H33.1699V19.9746C33.1699 18.8379 32.8301 17.9355 32.1504 17.2676C31.4707 16.5879 30.4688 16.248 29.1445 16.248C27.9844 16.248 27.0117 16.541 26.2266 17.127C25.4414 17.7129 25.0488 18.4219 25.0488 19.2539H21.7793C21.7793 18.3047 22.1133 17.3906 22.7812 16.5117C23.4609 15.6211 24.375 14.918 25.5234 14.4023C26.6836 13.8867 27.9551 13.6289 29.3379 13.6289C31.5293 13.6289 33.2461 14.1797 34.4883 15.2812C35.7305 16.3711 36.375 17.877 36.4219 19.7988V28.5527C36.4219 30.2988 36.6445 31.6875 37.0898 32.7188V33H33.6797ZM28.2832 30.5215C29.3027 30.5215 30.2695 30.2578 31.1836 29.7305C32.0977 29.2031 32.7598 28.5176 33.1699 27.6738V23.7715H30.6211C26.6367 23.7715 24.6445 24.9375 24.6445 27.2695C24.6445 28.2891 24.9844 29.0859 25.6641 29.6602C26.3438 30.2344 27.2168 30.5215 28.2832 30.5215ZM52.5938 27.9551C52.5938 27.0762 52.2598 26.3965 51.5918 25.916C50.9355 25.4238 49.7812 25.002 48.1289 24.6504C46.4883 24.2988 45.1816 23.877 44.209 23.3848C43.248 22.8926 42.5332 22.3066 42.0645 21.627C41.6074 20.9473 41.3789 20.1387 41.3789 19.2012C41.3789 17.6426 42.0352 16.3242 43.3477 15.2461C44.6719 14.168 46.3594 13.6289 48.4102 13.6289C50.5664 13.6289 52.3125 14.1855 53.6484 15.2988C54.9961 16.4121 55.6699 17.8359 55.6699 19.5703H52.4004C52.4004 18.6797 52.0195 17.9121 51.2578 17.2676C50.5078 16.623 49.5586 16.3008 48.4102 16.3008C47.2266 16.3008 46.3008 16.5586 45.6328 17.0742C44.9648 17.5898 44.6309 18.2637 44.6309 19.0957C44.6309 19.8809 44.9414 20.4727 45.5625 20.8711C46.1836 21.2695 47.3027 21.6504 48.9199 22.0137C50.5488 22.377 51.8672 22.8105 52.875 23.3145C53.8828 23.8184 54.627 24.4277 55.1074 25.1426C55.5996 25.8457 55.8457 26.707 55.8457 27.7266C55.8457 29.4258 55.166 30.791 53.8066 31.8223C52.4473 32.8418 50.6836 33.3516 48.5156 33.3516C46.9922 33.3516 45.6445 33.082 44.4727 32.543C43.3008 32.0039 42.3809 31.2539 41.7129 30.293C41.0566 29.3203 40.7285 28.2715 40.7285 27.1465H43.9805C44.0391 28.2363 44.4727 29.1035 45.2812 29.748C46.1016 30.3809 47.1797 30.6973 48.5156 30.6973C49.7461 30.6973 50.7305 30.4512 51.4688 29.959C52.2188 29.4551 52.5938 28.7871 52.5938 27.9551Z" fill="white"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="66.5417" y1="40.375" x2="66.5417" y2="17.7083" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white"/>
                                    <stop offset="0.435367" stopColor="white"/>
                                    <stop offset="0.536458" stopColor="#00FF47"/>
                                    <stop offset="0.552586" stopColor="#00FF47"/>
                                    <stop offset="1" stopColor="#00FF47"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </Link>
                    </div>
                    <div className="header__change-theme change-theme">
                        <label className="change-theme__switch">
                            <input
                            name="isGoing"
                            type="checkbox"
                            onChange={handleInputChange} 
                            checked={theme==="light"?true:false}
                            className="change-theme__input"/>
                            <span className="change-theme__toggle toggle-round"></span>
                        </label>
                    </div>
                </div>
                <div className="home-page__boards ">
                    {console.log(boardsArr)}
                    {!boardsArr.length
                    ?
                    <p className="home-page__text home-page__text_center">"Вы еще не создали ни одну доску, время это сделать!" </p>
                    :
                    <>
                    <p className="home-page__text">Ваши доски: </p>
                     {boardsArr.map((board,idx)=>{
                            return (   
                                <Link 
                                    to={{
                                        pathname: `/itask/#/boards/${board.id}`,
                                        board,
                                    }} key={idx}
                                    className="home-page__board">
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
                    </>
                    }
                </div>
                <div className="home-page__add-board">
                    <AddBoard />
                </div> 
            </div>
        );
}
const mapStateToProps = (state) =>({
    ...state
})
const mapDispatchToProps = dispatch =>({
    changeTheme: theme => dispatch(changeTheme(theme)),
    removeBoard: board => dispatch(removeBoard(board)),
})

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)

