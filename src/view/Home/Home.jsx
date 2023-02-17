import './Home.css'
import Top from '../../component/Top/Top'
import Card from '../../component/Card/Card';
import CardStack from '../../component/CardStack/CardStack';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [ state, setState ] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem('addedCard'));
        if(cards) {
            setState(cards);
        }
    }, [])

    const [ activeCard, setActiveCard ] = useState(null);
    const cards = state.map((card) => {
        return(
            <CardStack 
            key={ card.cardNumber }
            card={ card } 
            vendor={ card.vendor } 
            cardNumber={ card.cardNumber } 
            cardHolder={card.cardHolder} 
            validThru={ card.validThru } 
            onClick={() => setActiveCard(card)} />
        )
    }) 


    return(
        <div>
            <Top activeCard={ activeCard } />
            <div className='cards-container'>
            { cards }
            </div>
            <button className='add-card__button'
            onClick={() => navigate('/addcard') }>ADD A NEW CARD</button>
        </div>
    )
}

export default Home