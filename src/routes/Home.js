import React from "react";
import { Navbar } from "../components/Navbar";
import { Container, Col, Row } from "../components/Grid";
import { Cards } from "../components/Cards";
import { data } from "../mockdata/data";

export const Home = (props) => {
  return (
    <>
      <Navbar />

      <Container>
        <Row>
          <Col className="col-md-12 mt-5">
            <Cards
              value={data}
              title="Movies"
              alwaysShowTitle={true}
              emptyText="As you start and favourite courses - they'll appear here!"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
