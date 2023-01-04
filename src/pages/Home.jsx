import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import { furkanhoca } from "../../images/furkanhoca.jpg";
const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st3.myideasoft.com/idea/fp/15/myassets/products/822/0147e0d7-6d36-44d1-8d7d-e28058bdbf2e.jpeg?revision=1671471192"
            alt="First slide"
          />
          {/* <Carousel.Caption> */}
          <a
            href="https://www.dizgikitap.com/urun/otag-kpss-tarih-15-tamami-cozumlu-deneme-sinavi"
            rel="noreferrer"
          >
            OTAĞ TARİH DENEME SINAVI
          </a>
          <p>OTAĞ KPSS TARİH 15 TAMAMI ÇÖZÜMLÜ DENEME SINAVI</p>
          <br />
          {/* </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://yt3.googleusercontent.com/ytc/AMLnZu_5SASQcCXPyrY9a9OeKgkvMb5Dw7lb1DhNVGXK2w=s900-c-k-c0x00ffffff-no-rj"
            alt="Second slide"
          />
          {/* 
          <Carousel.Caption> */}
          <a
            href="https://www.youtube.com/@FurkanHocaileTarih"
            rel="noopener noreferrer"
          >
            FURKAN HOCA İLE TARİH
          </a>
          <p>Lütfen abone olup içerikleri beğenmeyi unutmayınız.</p>
          <br />
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Home;
