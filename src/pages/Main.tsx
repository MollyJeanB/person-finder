import React from "react";
import styled from "styled-components";
import { Nav } from "../components/Nav";
import { SearchHeader } from "../components/SearchHeader";

export const Container = styled.main`
  max-width: 575px;
  margin: 0 auto;
  padding: 165px 20px 20px;

  @media only screen and (max-width: 720px) {
    padding-top: 100px;
  }
`;

const Main = () => (
  <>
    <Nav />
    <Container>
      <SearchHeader />
    </Container>
  </>
);

export { Main };
