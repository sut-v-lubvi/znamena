import { styled, css } from "styled-components";
export const ButtonT = styled.button`
  &:active {
    transform: translateY(1.5px);
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s;
  }
  display: inline-block;
  /* margin-top: 40px; */
  width: 50px;
  height: 30px;
  background-color: rgb(48, 48, 48);
  color: white;

  ${(props) =>
    props.left &&
    css`
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      box-shadow: 1px 4px 6px 2px rgba(0, 0, 0, 0.2);
    `}

  ${(props) =>
    props.right &&
    css`
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      box-shadow: -1px 4px 6px 2px rgba(0, 0, 0, 0.2);
    `}
`;
