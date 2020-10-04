import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <div className="navbar__header__slogan">
          Son Dakika - Son Dakika Haberleri - Son Haberler | 24 Saat Kesintisiz
          Son Dakika Haber
        </div>
        <div className="navbar__header__content">
          <img
            className="navbar__header__content__image"
            src="https://www.sondakika.com/static/images/Logo2x.png"
            alt="#"
          />
          <div className="navbar__header__content__list">
            <ul className="navbar__header__content__list__group">
              <li className="navbar__header__content__list__group__item">
                <Link className='navbar__header__content__list__group__item__link' to="/">AnaSayfa</Link>
              </li>
              <li className="navbar__header__content__list__group__item">
                <Link className='navbar__header__content__list__group__item__link' to="/koronavirüs">Koronavirüs</Link>
              </li>
              <li className="navbar__header__content__list__group__item">
                <Link className='navbar__header__content__list__group__item__link' to="/ekonomi">Ekonomi</Link>
              </li>
              <li className="navbar__header__content__list__group__item">
                <Link className='navbar__header__content__list__group__item__link' to="/spor">Spor</Link>
              </li>
              <li className="navbar__header__content__list__group__item">
                <Link className='navbar__header__content__list__group__item__link' to="/magazin">Magazin</Link>
              </li>
              <li className="navbar__header__content__list__group__item">
                <Link className='navbar__header__content__list__group__item__link' to="/dünya">Dünya</Link>
              </li>
            </ul>
          </div>
          <div className='navbar__header__content__search'>
              <input className='navbar__header__content__search__input' placeholder='Ara' type='text'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
