import React from "react";
import Header from "@components/layout/Header";
import { Content, ContentArea, ContentWrap } from "@pages/Home/styles";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <ContentArea>
        <ContentWrap>
          <Content>
            <h2>환영합니다.</h2>
          </Content>
        </ContentWrap>
      </ContentArea>
    </div>
  );
};

export default Home;
