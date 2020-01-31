import React from "react";
import './BoardHeader.sass';
import {changeTheme} from '../../actions/boards';
import {connect} from 'react-redux';


const BoardHeader = (props) => {
    const {titleBoard,topicBoard} = props.board;
    const {theme} = props.boards
   
    const handleInputChange =(event)=>{
        const target = event.target;
        target.checked ? props.changeTheme('light') : props.changeTheme('dark');
    }

    return (
        <div className="board-header header">
            <div className="header__baord-info baord-info">
                <p className="board-header__title-topic">
                    <span className="board-header__title">{titleBoard}</span>  <span className="board-header__topic">{topicBoard}</span>
                </p>
                <div className="board__colors-info colors-info">
                    <div className="colors-info__item">
                        <div className="colors-info__color-line default">

                        </div>
                        <p className="colors-info__color-description">
                            Default
                        </p>
                    </div>
                    <div className="colors-info__item">
                        <div className="colors-info__color-line low">

                        </div>
                        <p className="colors-info__color-description ">
                            Low
                        </p>
                    </div>
                    <div className="colors-info__item">
                        <div className="colors-info__color-line medium">

                        </div>
                        <p className="colors-info__color-description">
                            Medium
                        </p>
                    </div>
                    <div className="colors-info__item">
                        <div className="colors-info__color-line high">

                        </div>
                        <p className="colors-info__color-description">
                            High
                        </p>
                    </div>
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
            
        </div>
        
    );
}


const mapStateToProps = (state) =>({
    ...state
})
const mapDispatchToProps = dispatch =>({
    changeTheme: theme => dispatch(changeTheme(theme)),
})

export default connect(mapStateToProps,mapDispatchToProps)(BoardHeader)





