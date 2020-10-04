import React, { useEffect, useState } from "react";
import axios from "axios";
import Kart from "./Kart";
import '../Styles/Magazin.scss' ;
import { Link } from "react-router-dom";

function Magazin() {
  let url =
    "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=72fd7cc094ef49d4979fc57bcfe48ec4";

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.articles.content); 
      setNews(res.data.articles);
    });
  }, [url]);

  console.log(news);
  return (
    <div className="magazin">
        <div className='magazin__router'>
            <Link className='magazin__router__link' to="/">SonDakika</Link>
            <span> {' > '} </span>
            <Link className='magazin__router__link' to='/magazin'>Magazin</Link>

        </div>
      <div className="magazin__title">
        Son Dakika magazin Haberleri
      </div>

      <div className="magazin__news">
        {news.map((item) => (
          <Kart
            key={Math.random()}
            title={item.title}
            cosole={console.log(item.content)}
            image={item.urlToImage}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Magazin;

