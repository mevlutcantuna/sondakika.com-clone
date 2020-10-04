import React from 'react';
import '../Styles/Kart.scss';

function Kart(props) {
    return (
        <div className='kart'>
            <div className="kart__header">
                <div className="kart__header__title">{props.title}</div>
                <div className="kart__header__image">
                    <img style={imageStyle} src={props.image} alt="#" />
                </div>
            </div>
            <div className='kart__desc'>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

const imageStyle = {
    width: "20rem",
    heigth : "7rem",
}

export default Kart
