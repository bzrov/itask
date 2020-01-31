import React,{useState} from "react";
import './AddList.sass';

import {uuid} from "uuidv4";
import {addList} from '../../actions/lists'
import {connect} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const AddList = (props) => {

        const [isAddListOpened,setIsAddListOpened]=useState(false)
        const [titleList,setTitleList] = useState("")
        const {idBoard} = props
        const list = {
            idBoard,
            titleList,
            idList: uuid(),
            cards : []
        }

        return (
            <div className="add-list">
                {!isAddListOpened && 
                    <div className="add-list__btn-add add-list__btn-open" onClick={()=> setIsAddListOpened(true)}>
                        Добавить колонку +
                    </div>
                }
                {isAddListOpened&&<div className="add-list_opened">
                    <input className="add-list__title-list" value={titleList} onChange={(e)=>{setTitleList(e.target.value)}}>

                    </input>
                    <div className="add-list__btns">
                        <button className="add-list__btn add-list__btn-add btn-save" onClick={()=>{
                            setTitleList("")
                            props.addList(list)
                            }}>
                            Добавить колонку
                        </button>
                        <button className="add-list__btn-close btn-close" onClick={()=> setIsAddListOpened(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>}
            </div>
        );
}

const mapStateToProps = (state) =>({
    ...state
})
const mapDispatchToProps = dispatch =>({
    addList: list => dispatch(addList(list)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AddList)