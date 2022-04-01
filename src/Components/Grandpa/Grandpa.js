import React from 'react';
import './Grandpa.css'
import Uncle from '../Uncle/Unlce';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty'

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa' style={{display:'flex'}}>
            <Father house={house}></Father>
            <Uncle  house={house}></Uncle>
            <Aunty  house={house}></Aunty>
        </div>
    );
};

export default Grandpa;