// import Pagination from "../components/Paginations";

import { Box } from "@mui/system";
import React from "react";

import { Container, Row } from "react-bootstrap";
import { data } from "../data/test1";
import Test1w from "./Test1w";
const Test1 = () => {
  return (
    <Container>
      <Row>
        {data?.map((item, index) => {
          // const { soru, a, b, c, d, e, cevap, numara } = item;
          return (
            <Box key={index}>
              <Test1w {...item} />
            </Box>
          );
        })}
        {/* <Pagination /> */}
      </Row>
    </Container>
  );
};

export default Test1;
