import styled from "styled-components";

export const HeaderWrap = styled.header`
  padding: 0 20px;
  position: fixed;
  height: 60px;
  width: 100%;
  max-width: 1188px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
`;

export const LayoutHeader = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 95%;
  height: 100%;
  a {
    font-weight: bold;
  }
`;

export const LayoutHeaderLeft = styled.div`
  flex: 1;
`;

export const LayoutHeaderRight = styled.button`
  a {
    padding-right: 1rem;
  }
`;
