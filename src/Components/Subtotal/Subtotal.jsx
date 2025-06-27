import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStatevalue } from '../StateProvider/StateProvider';
import { getbasketTotal } from '../StateProvider/reducer';


const Subtotal = () => {
    const [{basket}] = useStatevalue();
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value)=>{
            return(
                <>
                <p>SubTotal ({basket.length} item): <strong>{`${value}`}</strong></p>
                <small className='subtotal_gift'>
                    <input type="checkbox" name="" id="" />
                    This order contains a gift
                </small>
                </>
            )
        }}
        decimalScale={2}
        value={getbasketTotal(basket)}
        displayType={"text"}
        thousandSeparator = {true}
        prefix={"₹"}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal