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
        <LayoutHeaderLeft>example</LayoutHeaderLeft>
        <LayoutHeaderRight>
          <Link to="editor">에디터</Link>
          <Link to="login">로그인</Link>
        </LayoutHeaderRight>
      </LayoutHeader>
    </HeaderWrap>
  );
};

export default Header;
