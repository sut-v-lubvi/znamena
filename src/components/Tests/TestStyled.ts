import { styled } from "styled-components";

export const DivContainerTests = styled.div`
  justify-content: center;
  position: relative;
  z-index: 2;
  height: 100vh;
  display: grid;
  grid-template-rows: 85% 15%;
`;
export const DivTest = styled.div`
  border-radius: 15px;
  border: solid 2px rgb(128, 128, 128);
  grid-template-rows: 300px auto;
  margin-top: 90px;
  display: grid;
  justify-content: center;
  height: auto;
`;
export const DivButton = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  grid-template-columns: 50% 50%;
  margin: 0px auto;
`;
