import './Top.css'
import Card from '../Card/Card.jsx'

function Top(props) {
    const { activeCard } = props;
    return(
        <div className='top-container'>
            <h1>E-WALLET</h1>
            <p>ACTIVE CARD</p>
            {activeCard && (
                <div >
                    <Card
                    className={`card-container-${activeCard.vendor.toLowerCase()}`}
                    vendor={ activeCard.vendor }
                    cardNumber={ activeCard.cardNumber }
                    cardHolder={ activeCard.cardHolder }
                    validThru={ activeCard.validThru }
                    />
                </div>
            )}
        </div>
    )
}

export default Top 