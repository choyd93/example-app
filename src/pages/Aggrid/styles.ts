import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  padding-top: 60px;
  .test-grid {
    flex-grow: 1;
  }
  .test-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .test-header {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 13px;
    margin-bottom: 1rem;
  }
  .ag-theme-alpine {
    width: 650px !important;
    height: 300px !important;
  }
`;

export const AggridWrap = styled.div`
  width: 648px;
  margin: 36px auto;
  font-size: 20px;
  font-weight: bold;
`;
