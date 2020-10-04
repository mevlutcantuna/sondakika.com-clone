import React, { useEffect, useState } from "react";
import axios from "axios";
import Kart from "./Kart";
import '../Styles/Ekonomi.scss' ;
import { Link } from "react-router-dom";

function Ekonomi() {
  let url =
    "http://newsapi.org/v2/everything?q=apple&from=2020-10-03&to=2020-10-03&sortBy=popularity&apiKey=72fd7cc094ef49d4979fc57bcfe48ec4";

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.articles.content);
      setNews(res.data.articles);
    });
  }, [url]);

  console.log(news);
  return (
    <div className="ekonomi">
        <div className='ekonomi__router'>
            <Link className='ekonomi__router__link' to="/">SonDakika</Link>
            <span> {' > '} </span>
            <Link className='ekonomi__router__link' to='/ekonomi'>Ekonomi</Link>

        </div>
      <div className="ekonomi__title">
        Son Dakika ekonomi Haberleri
      </div>

      <div className="ekonomi__news">
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

export default Ekonomi;