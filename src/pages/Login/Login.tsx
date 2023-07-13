import React from "react";
import { LoginBox, LoginLogo, LoginUI, LoginUIWrap } from "@pages/Login/styles";

import KakaoSNS from "@components/Login/kakaoSNS";
import Header from "@components/layout/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="container">
        <LoginUIWrap>
          <LoginUI>
            <LoginBox>
              <LoginLogo>
                <h1>로그인</h1>
                <p className="txt">하루 30분, 세상에 없던 새로운 아트 클래스</p>
                <KakaoSNS />
              </LoginLogo>
            </LoginBox>
          </LoginUI>
        </LoginUIWrap>
      </div>
    </>
  );
};

export default Login;
