import './CardStack.css'
import chipDark from '../../assets/chip-dark.svg'
import chipLight from '../../assets/chip-light.svg'
import bitcoinLogo from '../../assets/vendor-bitcoin.svg'
import blockchainLogo from '../../assets/vendor-blockchain.svg'
import evilLogo from '../../assets/vendor-evil.svg'
import ninjaLogo from '../../assets/vendor-ninja.svg'
import Card from '../Card/Card'
import { useState } from 'react'

function CardStack(props) {
    const { card, onClick } = props;

    if(card) {
        return(
            <article className='card-container' onClick={ onClick }>
                <Card
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