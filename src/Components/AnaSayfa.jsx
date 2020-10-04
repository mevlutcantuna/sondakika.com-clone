import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "../Styles/AnaSayfa.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import AnaSayfaKart from "./AnaSayfaKart";

function AnaSayfa() {
  let url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=72fd7cc094ef49d4979fc57bcfe48ec4";

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setNews(res.data.articles);
    });
  },[url]);

  console.log(news)


  return (
    <div className="anasayfa">
      <Carousel className="anasayfa__slider" autoPlay>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/sosyal-medyada-yayilan-ali-kirca-oldu_13644252_26_sd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/zeynep-alkan-in-bikinili-pozu-makyajsiz_13644210_79_sd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/avrupa-ulkesi-koronavirusten-kiriliyor-bir-gunde_13644206_48_sd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/reklam/2020/10/02/202010213694.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/ermenistan-azerbaycan-karsisinda-tutunamiyor-7_13644196_99_sd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/merve-nin-gundem-olma-cabasi-simdi-de-ic_13643600_48_sd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/cay-toplayarak-hayatini-kazanan-yabanci-uyruklu_13643597_96_sd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/trump-in-koronaviruse-yakalanacagini-bilen-baba_13643879_5_sd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/canli-yayinda-istenmeyen-kaza-binlerce-kisinin_13643678_84_sd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://foto.sondakika.com/manset/2020/10/03/bodrum-katinda-fuhus-zindani-sosyal-medyadan_13643595_22_sd.jpg"
            alt=""
          />
        </div>
      </Carousel>
      <div className="anasayfa__news">
        {news.map((item) => ( 
          <AnaSayfaKart
            key={Math.random()}
            title={item.title}
            image={item.urlToImage}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AnaSayfa;
