import { styled, css } from "styled-components";

export const Znamya = styled.div`
  text-align: center;
  font-family: "znamenna";
  font-size: 120px;
  height: auto;
  align-self: center;
`;

export const DivImg = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;
  /* background: url("../../../../public/kruk.jpg") no-repeat center; */
`;
export const DivQuestions = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DivTitle = styled.div`
  margin: 0px auto;
  text-align: center;
  font-size: 22px;
  height: auto;
`;
export const ContainerQ = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  gap: 20px;
`;

export const InputT = styled.input`
  display: block;
  border-radius: 50%;
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;
export const Line = styled.div`
  margin: 10px;
  margin-top: 20px;
  height: 1px;
  background-color: rgb(48, 48, 48);
`;
export const ButtonNew = styled.button<{ flag: string }>`
  color: black;
  align-self: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  background-color: white;
  border: 2px solid rgb(48, 48, 48);
  border-radius: 10px;
  width: 90%;
  height: 47px;
  font-size: 16px;
  padding-left: 10px;
  text-align: start;

  ${(props: any) =>
    props.flag === "black" &&
    css`
      border: 2px solid rgb(48, 48, 48);
    `}
  ${(props: any) =>
    props.flag === "red" &&
    css`
      border: 3px solid red;
    `}
		${(props: any) =>
    props.flag === "green" &&
    css`
      border: 3px solid green;
    `}
`;
export const ButtonNext = styled.button`
  &:active {
    transform: translateY(1.5px);
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s;
  }
  font-size: 14px;
  color: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: rgb(48, 48, 48);
  width: 90%;
  height: 47px;
  font-size: 15px;
  border-radius: 10px;
`;
export const ButtonCont = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`;
