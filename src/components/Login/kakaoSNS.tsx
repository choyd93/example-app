import React from "react";
import kakaoImg from "@assets/images/kakao_login_large_narrow.png";
import { KaKaoBtn } from "@components/Login/styles";

const KakaoSNS = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <KaKaoBtn type="button" onClick={handleLogin}>
      <img src={kakaoImg} alt="카카오" />
    </KaKaoBtn>
  );
};

export default KakaoSNS;
