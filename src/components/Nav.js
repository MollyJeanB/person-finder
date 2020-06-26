import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo"

const NavContainer = styled.nav`
  border-top: 3.5px solid #0addd7;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  width: 100%;
  background-color: #fff;
`;

const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 15px 15px 8px;
`;

const Nav = () => (
  <NavContainer>
    <NavInner>
      <Logo />
    </NavInner>
  </NavContainer>
);
export { Nav };
