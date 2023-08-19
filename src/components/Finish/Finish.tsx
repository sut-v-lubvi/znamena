import { DivTitle } from "../../common/components/Test/TestStyled";
import { FinishContainer, FinishDiv, FinishDivTitle } from "./FinishStyled";

function Finish() {
  return (
    <FinishContainer>
      <FinishDivTitle>Результат</FinishDivTitle>
      <FinishDiv>Ошибок: 3</FinishDiv>
      <FinishDiv>Время: 10:15</FinishDiv>
    </FinishContainer>
  );
}

export default Finish;
