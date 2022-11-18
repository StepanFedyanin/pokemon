import React from 'react'
import './Characteristics.scss'
function Characteristics({title,meaning}) {
    return (
        <div className="PokiCard__characteristics--item">
            <div className="PokiCard__characteristics--meaning">
                <p>{meaning}</p>
            </div>
            <div className="PokiCard__characteristics--name">
                <p className='PokiCard__name--text'>{title}</p>
            </div>
        </div>
    )
}

export default Characteristics