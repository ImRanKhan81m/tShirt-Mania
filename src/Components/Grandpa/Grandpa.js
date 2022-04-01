import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Uncle from '../Uncle/Unlce';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty'

const RingContext = createContext('diamond')

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornaments = 'Diamond Ring';

    const handleBuyHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }

    return (
        <RingContext.Provider>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <p>House: {house}</p>
                <button onClick={handleBuyHouse}>Buy A House</button>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ornaments={ornaments}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;