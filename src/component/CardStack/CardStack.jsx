import './CardStack.css'
import Card from '../Card/Card'

function CardStack(props) {
    const { card, onClick } = props;

    if(card) {
        return(
            <article className={`card-container__${card.vendor.toLowerCase()} card`} onClick={ onClick }>
                <Card
                className={`card-container-${card.vendor.toLowerCase()} card-container-${card.vendor.toLowerCase()}__stack`}
                vendor={card.vendor}
                cardNumber={card.cardNumber}
                cardHolder={card.cardHolder}
                validThru={card.validThru}
                />
            </article>
        )
    }
}

export default CardStack