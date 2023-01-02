import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
// import { Button } from "react-bootstrap";

const Test1w = ({ soru, a, b, c, d, e, cevap, numara }) => {
  const [open, setOpen] = useState(true);
  return (
    <div onClick={() => setOpen(!open)}>
      <Box sx={{ background: "peachpuff" }}>
        {open && (
          <Box
            sx={{
              border: "1px solid black",
              textAlign: "start",
              minHeight: 300,
              fontSize: 30,
              gap: 3,
              padding: 2,
              mt: 3,
            }}
          >
            <Box sx={{ mt: 1, mb: 3 }}>
              <h3>
                {numara}){soru}
              </h3>
            </Box>

            <Box sx={{ border: "1px solid black", mt: 1 }}>
              <p>a){a}</p>
            </Box>
            <Box sx={{ border: "1px solid black", mt: 2 }}>
              <p>b){b}</p>
            </Box>
            <Box sx={{ border: "1px solid black", mt: 2 }}>
              <p>c){c}</p>
            </Box>
            <Box sx={{ border: "1px solid black", mt: 2 }}>
              <p>d){d}</p>
            </Box>
            <Box sx={{ border: "1px solid black", mt: 2 }}>
              <p>e){e}</p>
            </Box>
            <Box>
              <br />
              <p>Cevabı görmek için sorunun üzerine tıklayınız...</p>
            </Box>
          </Box>
        )}
        {!open && (
          <Box
            sx={{
              border: "1px solid black",
              textAlign: "start",
              minHeight: 300,
              fontSize: 30,
              gap: 3,
              padding: 2,
              mt: 3,
            }}
          >
            {cevap}
            <br />
            <br />
            <p>Soruya dönmek için cevabın üzerine tıklayınız...</p>
          </Box>
        )}
      </Box>
      {/* <Box sx={{ mt: 3 }}>
        {open && <Button onClick={() => setOpen(!open)}>CEVAPLARI GÖR</Button>}
        {!open && <Button onClick={() => setOpen(!open)}>SORULARI GÖR</Button>}
      </Box> */}
    </div>
  );
};

export default Test1w;
