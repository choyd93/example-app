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
`;

export const AggridWrap = styled.div`
  width: 800px;
  margin: 0 auto;
`;
