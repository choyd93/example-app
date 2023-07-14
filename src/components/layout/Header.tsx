import React from "react";
import {
  HeaderWrap,
  LayoutHeader,
  LayoutHeaderLeft,
  LayoutHeaderRight,
} from "@components/layout/styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrap>
      <LayoutHeader>
        <LayoutHeaderLeft>
          <Link to="/">example</Link>
        </LayoutHeaderLeft>
        <LayoutHeaderRight>
          <Link to="/chart">Chart</Link>
          <Link to="/ag-grid">AG-Grid</Link>
          <Link to="/editor">Editor</Link>
          <Link to="/login">Login</Link>
        </LayoutHeaderRight>
      </LayoutHeader>
    </HeaderWrap>
  );
};

export default Header;
