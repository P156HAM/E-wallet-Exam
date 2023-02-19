import './Card.css'
import chipDark from '../../assets/chip-dark.svg'
import chipLight from '../../assets/chip-light.svg'
import bitcoinLogo from '../../assets/vendor-bitcoin.svg'
import blockchainLogo from '../../assets/vendor-blockchain.svg'
import evilLogo from '../../assets/vendor-evil.svg'
import ninjaLogo from '../../assets/vendor-ninja.svg'

function Card(props) {
    const { vendor, cardNumber, cardHolder, validThru, className } = props;
    if(cardNumber) {
        return(
            <article className={ `${className}` }>
                <header className='card-header'>
                    {vendor == 'bitcoinInc' ? <img className='card__logo' src={ chipDark } alt="" /> : 
                    <img className='card__logo' src={ chipLight } alt="" />}
                    {vendor == 'bitcoinInc' ? <img className='card__logo' src={ bitcoinLogo } alt=""/> : ''}
                    {vendor == 'blockChainInc' ? <img className='card__logo' src={ blockchainLogo } alt="" /> : ''}
                    {vendor == 'ninjaBank' ? <img className='card__logo' src={ ninjaLogo } alt="" /> : ''}
                    {vendor == 'evilCorp' ? <img className='card__logo' src={ evilLogo } alt="" /> : ''}
                </header>
                <main className='card-main'>
                    <h2 className='card__number'> {cardNumber} </h2>
                </main>
                <footer className='card-footer'>
                    <section className='Card__holder'>
                        <p> CARDHOLDER NAME </p>
                        <p> VALID THRU </p>
                    </section>
                    <section className='Card__info'>
                        <h3> { cardHolder } </h3>
                        <h3> { validThru } </h3>
                    </section>
                </footer>
            </article>
        )
    }
}

export default Card