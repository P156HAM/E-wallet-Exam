import './Home.css'
import Top from '../../component/Top/Top'
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

    function deleteCard() {
        let data = JSON.parse(localStorage.getItem('addedCard'))
        data = data.filter((card) => {
            return card.cardNumber !== activeCard.cardNumber
        })
        localStorage.setItem('addedCard', JSON.stringify(data))
        setState(data);
        setActiveCard(null)
    }

    return(
        <div className='home'>
            <Top activeCard={ activeCard } />
            <div className='cards-container'>
            { cards }
            </div>
            <button className='add-card__button'
            onClick={() => navigate('/addcard') }>ADD A NEW CARD</button>
            <button className='delete-card__button'
            onClick={ deleteCard }>DELETE CARD</button>
        </div>
    )
}

export default Home