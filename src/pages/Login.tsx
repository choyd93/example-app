import React from "react";
import { LoginBox, LoginLogo, LoginUI, LoginUIWrap } from "@pages/styles";
import Kakao from "@components/Login/kakao";

const Login = () => {
  console.log("로그인");
  return (
    <div className="container">
      <LoginUIWrap>
        <LoginUI>
          <LoginBox>
            <LoginLogo>
              <h1>로그인</h1>
              <p className="txt">하루 30분, 세상에 없던 새로운 아트 클래스</p>
              <Kakao />
            </LoginLogo>
          </LoginBox>
        </LoginUI>
      </LoginUIWrap>
    </div>
  );
};

export default Login;
