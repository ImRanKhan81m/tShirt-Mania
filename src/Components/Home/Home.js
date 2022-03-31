import React, { useState } from 'react';
import useTShirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirts from '../TShirts/TShirts';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);


    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }else{
            alert('item alreadt added!')
        }

    }

    const handleRemoveCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirts
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirts>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveCart={handleRemoveCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;