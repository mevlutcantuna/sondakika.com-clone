import React, { useEffect, useState } from "react";
import axios from "axios";
import Kart from "./Kart";
import '../Styles/Koronavirüs.scss' ;
import { Link } from "react-router-dom";

function Koronavirüs() {
  let url =
    "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=72fd7cc094ef49d4979fc57bcfe48ec4";

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.articles.content); 
      setNews(res.data.articles);
    });
  }, [url]);

  console.log(news);
  return (
    <div className="koronavirüs">
        <div className='koronavirüs__router'>
            <Link className='koronavirüs__router__link' to="/">SonDakika</Link>
            <span> {' > '} </span>
            <Link className='koronavirüs__router__link' to='/koronavirüs'>Koronavirüs</Link>

        </div>
      <div className="koronavirüs__title">
        Son Dakika Koronavirüs Haberleri
      </div>

      <div className="koronavirüs__news">
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

export default Koronavirüs;
