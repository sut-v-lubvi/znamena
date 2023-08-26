import { FinishProps } from "../../screens/ScreenFinish/ScreenFinish";
import {
  FinishContainer,
  FinishDiv,
  FinishDivTitle,
  FinishS,
} from "./FinishStyled";

function Finish({ result }: FinishProps) {
  return (
    <FinishContainer>
      <FinishS>
        <FinishDivTitle>Результат</FinishDivTitle>
        {result.length !== 0 ? (
          result.map((e) => {
            return (
              <FinishDiv key={e.currentTestId}>
                <FinishDiv>Тест: {e.currentTestId}</FinishDiv>
                <FinishDiv>Правильных ответов: {e.numbCorrAnsver}</FinishDiv>
                <FinishDiv>Ошибок: {e.numberError}</FinishDiv>
              </FinishDiv>
            );
          })
        ) : (
          <div></div>
        )}
      </FinishS>
    </FinishContainer>
  );
}

export default Finish;
