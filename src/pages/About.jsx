import { Box } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          {" "}
          Merhaba ben Furkan Hoca. Yıldırım Beyazıt Üniversitesi Tarih Bölümü
          Mezunuyum.
          <span>
            <a
              href="https://www.youtube.com/@FurkanHocaileTarih"
              rel="noreferrer"
            >
              <span> Furkan Hoca ile Tarih</span>
            </a>
          </span>
          Kanalının Sahibiyim. Özel bir okulda Tarih Öğretmenliği Yapmaktayım.
          Dizgi Kitabevinde halen yayınlanmakta olan{" "}
          <span>
            <a
              href="https://www.dizgikitap.com/urun/otag-kpss-tarih-15-tamami-cozumlu-deneme-sinavi"
              rel="noreferrer"
            >
              OTAĞ TARİH Deneme sınavlarının
            </a>
          </span>{" "}
          yazarıyım. Bu sitede konu anlatımı ve testler yayınlamaktayım. Ayrıca
          Soru Sor kısmından bana sorularınızı sorabilirsiniz...
        </Card.Body>
      </Card>
      <Box>
        {" "}
        <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-7854945301060093"
          data-ad-slot="3802897102"
          data-auto-format="rspv"
          data-full-width=""
        >
          <div overflow=""></div>
        </amp-ad>
      </Box>
    </div>
  );
};

export default About;
