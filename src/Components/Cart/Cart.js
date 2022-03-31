import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {


    // Conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true : false   
    // 3. && Operator (shorthand)
    // 4. || 

    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>ohh Kipta, khoroch kor</h5>
            <p>kinos na ken</p>
        </div>
    } else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }


    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            
            {
                cart.map(tShirt =>
                    <h4>{tShirt.name}
                        <button onClick={() => handleRemoveCart(tShirt)}>  X  </button>
                    </h4>)
            }
             {cart.length === 0 || <p className='orange'>YAY! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Triangonal</h3>
                <p>3jon k gift diba</p>
                </div>}
            {command}
            {cart.length !==4 ? <p>Keep Adding</p> : <button>Remove All</button> }
            {cart.length ===4 && <button className='orange'>Review Order</button>}
        </div>
    );
}; 

export default Cart;