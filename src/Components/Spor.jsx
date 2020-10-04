import React, { useEffect, useState } from "react";
import axios from "axios";
import Kart from "./Kart";
import '../Styles/Spor.scss' ;
import { Link } from "react-router-dom";

function Spor() {
  let url =
    "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=72fd7cc094ef49d4979fc57bcfe48ec4";

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.articles.content); 
      setNews(res.data.articles);
    });
  }, [url]);

  console.log(news);
  return (
    <div className="spor">
        <div className='spor__router'>
            <Link className='spor__router__link' to="/">SonDakika</Link>
            <span> {' > '} </span>
            <Link className='spor__router__link' to='/spor'>Spor</Link>

        </div>
      <div className="spor__title">
        Son Dakika spor Haberleri
      </div>

      <div className="spor__news">
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

export default Spor;
