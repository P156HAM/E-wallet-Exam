import './CardForm.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'

function CardForm() {

    const [ card, setCard ] = useState(JSON.parse(localStorage.getItem('addedCard')) || []);
    const [ cardNumber, setCardNumber] = useState('XXXX XXXX XXXX XXXX')
    const [ cardHolder, setCardHolder ] = useState('FIRSTNAME LASTNAME')
    const [ validThru, setValidThru ] = useState('MM/YY')
    const [ ccv, setCcv ] = useState('')
    const [ vendor, setVendor ] = useState('bitcoinInc')
    
    useEffect(() => {
        if(card) {
            localStorage.setItem('addedCard', JSON.stringify(card))
        }
    }, [card])

    function renderCard () {
        const addedCard = {
            cardNumber,
            cardHolder,
            validThru,
            ccv,
            vendor,
        }
        setCard((currentCard) => {
            return[...currentCard, addedCard]
        });
        
    }

    const navigate = useNavigate();

    useEffect(() => {
         if(ccv.length > 0) {
             navigate('/')
         }
    }, [card])

    function handelClick() {
        if(cardNumber && cardHolder && vendor && validThru && ccv) {
            renderCard()
        } 
    } 

    return(
        <div className='main-container'>
            <section className='top-container'>
                <h1 className='top-title'>ADD A NEW BANK CARD</h1>
                <Card 
                    className={ `card-container-${vendor.toLowerCase()}` }
                    vendor={ vendor }
                    cardNumber={ cardNumber }
                    cardHolder={ cardHolder }
                    validThru={ validThru }
                />
            </section>
            <section className='input-container'>
                <br />
                <label className='label-title'>CARD NUMBER</label>
                <input type="tel" maxLength={16}
                onChange={(event) => {setCardNumber((event.target.value).match(/\d{1,4}/g).join(' '))}}/>
                
                <label className='label-title card-holder__label'>CARD HOLDER</label>
                <input type="text"
                onKeyUp={(event) => {setCardHolder(event.target.value.toUpperCase())}}/>
                <div className='input-container__Small'>
                    <article className='container__valid-thru'>
                        <br />
                        <label className='label-title'>VALID THRU</label>
                        <input type="tel" maxLength={4}
                        onChange={(event) => {setValidThru((event.target.value).match(/\d{1,2}/g).join('/'))}} />
                    </article>
                    <article className='container__ccv'>
                        <br />
                        <label className='label-title'>CCV</label>
                        <input type="tel" maxLength={3}
                        onChange={(event) => {setCcv(event.target.value)}}/>
                    </article> 
                </div>
                <br />
                <div className='vendor-container'>
                    <label className='label-title' htmlFor="vendor">VENDOR</label>
                    <select name="vendor" className='vendor-dropdown'
                    onChange={(event) => {setVendor(event.target.value)}}>
                        <option value="bitcoinInc">BITCOIN INC</option>
                        <option value="ninjaBank">NINJA BANK</option>
                        <option value="blockChainInc">BLOCK CHAIN INC</option>
                        <option value="evilCorp">EVIL CORP</option>
                    </select>
                </div>
            </section>
            <button className='addcard-button' onClick={ handelClick }>ADD CARD</button>
            <button className='back-button'
            onClick={ () => navigate('/') }>MY CARDS</button>
        </div>
    )
}

export default CardForm