import './Home.css'
import Top from '../../component/Top/Top'
import { useLocation } from 'react-router-dom'
import Card from '../../component/Card/Card';
import CardStack from '../../component/CardStack/CardStack';
import { useState } from 'react';

function Home() {
    const { state } = useLocation();
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
            {activeCard && (
                <div className='active-card-container'>
                    <Card
                    vendor={ activeCard.vendor }
                    cardNumber={ activeCard.cardNumber }
                    cardHolder={ activeCard.cardHolder }
                    validThru={ activeCard.validThru }
                    />
                </div>
            )}
            <div className='cards-container'>
            { cards }
            </div>
            
        </div>
    )
}

export default Home