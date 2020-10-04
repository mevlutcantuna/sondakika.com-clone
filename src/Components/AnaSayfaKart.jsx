import React from "react";
import "../Styles/AnaSayfaKart.scss";

function AnaSayfaKart(props) {
    return (
        <div className="haberKartı">
            <div className="haberKartı__header">
                <div className="haberKartı__header__title">{props.title}</div>
                <div className="haberKartı__header__image">
                    <img style={imageStyle} src={props.image} alt="#" />
                </div>
            </div>
            <div className='haberKartı__desc'>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

const imageStyle = {
    width: "15rem",
    heigth : "5rem",
}

export default AnaSayfaKart;
