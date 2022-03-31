import React from 'react';
import './TShirts.css'

const TShirts = (props) => {
    const {handleAddToCart, tShirt}=props;
    const {name, price, picture} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Add to card</button>
        </div>
    );
};

export default TShirts;