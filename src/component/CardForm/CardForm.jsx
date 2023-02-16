import './CardForm.css'
import bitcoinLogo from '../../assets/vendor-bitcoin.svg'
import blockchainLogo from '../../assets/vendor-blockchain.svg'
import evilLogo from '../../assets/vendor-evil.svg'
import ninjaLogo from '../../assets/vendor-ninja.svg'
import chipDark from '../../assets/chip-dark.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CardForm() {

    const [ card, setCard ] = useState([]);
    const [ cardNumber, setCardNumber] = useState('XXXX XXXX XXXX XXXX')
    const [ cardHolder, setCardHolder ] = useState('FIRSTNAME LASTNAME')
    const [ validThru, setValidThru ] = useState('MM/YY')
    const [ ccv, setCcv ] = useState('')
    const [ vendor, setVendor ] = useState('bitcoinInc')
    const [ cardColor, setCardColor ] = useState('#D0D0D0')
    console.log(card)

    useEffect(() => {
        if(vendor == 'bitcoinInc') {
            setCardColor('#FFAE34')
        } else if(vendor == 'blockChainInc') {
            setCardColor('#8B58F9')
        } else if(vendor == 'ninjaBank') {
            setCardColor('#222222')
        } else {
            setCardColor('#F33355')
        }
    }, [vendor])

    function renderCard () {
        const addedCard = {
            cardNumber,
            cardHolder,
            validThru,
            ccv,
            vendor,
            cardColor
        }
        setCard((currentCard) => {
            return[...currentCard, addedCard]
        });
    }

    const navigate = useNavigate();

    useEffect(() => {
        if(card.length > 0) {
            navigate('/', { state: card })
        }
    }, [card])

    function handelClick() {
        renderCard()
    } 


    return(
        <div className='main-container'>
            <section className='top-container'>
                <h1 className='top-title'>ADD A NEW BANK CARD</h1>
                <article className='card-container'>
                    <header className='card-header'>
                        <img className='card__logo' src={ chipDark } alt="" />
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
            </section>
            <section className='input-container'>
                <br />
                <label className='label-title' htmlFor="card-number">CARD NUMBER</label>
                <input type="tel" id='card-number' maxLength={16}
                onChange={(event) => {setCardNumber((event.target.value).match(/\d{1,4}/g).join(' '))}}/>
                
                <label className='label-title card-holder__label' htmlFor="card-holder">CARD HOLDER</label>
                <input type="text" id='card-holder'
                onChange={(event) => {setCardHolder(event.target.value)}}/>
                <div className='input-container__Small'>
                    <article className='container__valid-thru'>
                        <br />
                        <label className='label-title' htmlFor="valid-thru">VALID THRU</label>
                        <input type="text" id='valid-thru' maxLength={5}
                        onChange={(event) => {setValidThru((event.target.value).match(/\d{1,2}/g).join('/'))}} />
                    </article>
                    <article className='container__ccv'>
                        <br />
                        <label className='label-title' htmlFor="ccv">CCV</label>
                        <input type="text" id='ccv'
                        onChange={(event) => {setCcv(event.target.value)}}/>
                    </article> 
                </div>
                <br />
                <div className='vendor-container'>
                    <label className='label-title' htmlFor="vendor">VENDOR</label>
                    <select name="vendor" id="vendor" className='vendor-dropdown' 
                    onChange={(event) => {setVendor(event.target.value)}}>
                        <option value="bitcoinInc">BITCOIN INC</option>
                        <option value="ninjaBank">NINJA BANK</option>
                        <option value="blockChainInc">BLOCK CHAIN INC</option>
                        <option value="evilCorp">EVIL CORP</option>
                    </select>
                </div>
            </section>
            <button className='addcard-button' onClick={ handelClick }>ADD CARD</button>
            <button className='back-button'>MY CARDS</button>
        </div>
    )
}

export default CardForm