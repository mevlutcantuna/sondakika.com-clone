import React, { useEffect, useState } from "react";
import axios from "axios";
import Kart from "./Kart";
import '../Styles/Dünya.scss' ;
import { Link } from "react-router-dom";

function Dünya() {
  let url =
    "http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-04&sortBy=publishedAt&apiKey=72fd7cc094ef49d4979fc57bcfe48ec4";

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.articles.content); 
      setNews(res.data.articles);
    });
  }, [url]);

  console.log(news);
  return (
    <div className="dünya">
        <div className='dünya__router'>
            <Link className='dünya__router__link' to="/">SonDakika</Link>
            <span> {' > '} </span>
            <Link className='dünya__router__link' to='/dünya'>Dünya</Link>

        </div>
      <div className="dünya__title">
        Son Dakika dünya Haberleri
      </div>

      <div className="dünya__news">
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

export default Dünya;

