import './Top.css'
import Card from '../Card/Card.jsx'

function Top(props) {
    const { activeCard } = props;
    return(
        <div className='top-container'>
            <h1 className='header-title'>E-WALLET</h1>
            <p>ACTIVE CARD</p>
            {activeCard && (
                <div >
                    <Card
                    className={`card-container-${activeCard.vendor.toLowerCase()} active__Card`}
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