<<<<<<< Updated upstream
import {
  FinishContainer,
  FinishDiv,
  FinishDivTitle,
  FinishS,
} from "./FinishStyled";
=======
import { FinishContainer, FinishDiv, FinishDivTitle } from "./FinishStyled";
>>>>>>> Stashed changes

function Finish() {
  return (
    <FinishContainer>
      <FinishS>
        <FinishDivTitle>Результат</FinishDivTitle>
        <FinishDiv>Ошибок: 3</FinishDiv>
        <FinishDiv>Время: 10:15</FinishDiv>
      </FinishS>
    </FinishContainer>
  );
}

export default Finish;
