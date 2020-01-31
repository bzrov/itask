import React,{useState} from "react";
import './AddCard.sass';
import {uuid} from "uuidv4";
import {addCard} from '../../actions/cards';
import {connect} from 'react-redux';

const AddCard = (props) => {
        const [cardPriority,setCardPriority]=useState("Default")
        const {idList,idBoard} = props
        const [textCard,setTextCard] = useState("")
        const card = {
            textCard,
            doneCard: false,
            cardPriority,
            idList,
            idBoard,
            idCard: uuid(),
        }


    return (
            <div className="add-card">
                <div className="add-card__textarea-wrapper">
                    <textarea
                        className="add-card__textarea"
                        type="text" 
                        placeholder="Ввести заголовок для этой карточки" 
                        value={textCard}
                        onChange={(e)=>setTextCard(e.target.value) } 
                    />
                </div>
                <div className="add-card__priority">
                    <p>Выберите важность: </p> 
                    <select className="add-card__priority-select" value={cardPriority} onChange={(e)=> setCardPriority(e.target.value)}>
                        <option value="Default">Default</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                
                <button className="add-card__btn add-card__btn-add btn-save" onClick={()=>{
                    setTextCard("")
                    props.addCard(card)
                    }}>
                    Добавить карточку
                </button>
            </div>
            
                
            
            
        
    );
}
const mapStateToProps = (state) =>({
    ...state
})
const mapDispatchToProps = dispatch =>({
    addCard: card => dispatch(addCard(card)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AddCard)





