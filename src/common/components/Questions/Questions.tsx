import { useEffect, useState, useContext } from "react";
import {
  ButtonCont,
  ButtonNew,
  ButtonNext,
  ContainerQ,
  DivImg,
  DivQuestions,
  DivTitle,
  Line,
  Znamya,
} from "./QuestionsStyled";
import { QuestionProps } from "./QuestionsType";
import { getButtonStatus } from "./utils/getButtonstatus";
import { useNavigate } from "react-router-dom";
import { saveResultTest } from "./utils/saveResultTest";
import { Context } from "../../../App";

type InputT = {
  id: number;
  answer: boolean;
};

function Questions({
  numberQuestions,
  currentQuestion,
  postQuestions,
  currentTestId,
}: QuestionProps) {
  const [ansverId, setAnsverId] = useState<number | null>(null);
  const [numbCorrAnsver, setNumbCorrAnsver] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const navigate = useNavigate();
  const setResult = useContext(Context);

  useEffect(() => {
    if (ansverId === currentQuestion.correctAnswersIds[0]) {
      setNumbCorrAnsver(numbCorrAnsver + 1);
      console.log("Колличество прав отв" + numbCorrAnsver);
    }
  }, [ansverId]);

  useEffect(() => {
    console.log("Випросс № " + counter);
    if (counter === numberQuestions) {
      saveResultTest(
        numbCorrAnsver,
        currentTestId,
        setResult.setResult,
        numberQuestions
      );
      navigate("/finish");
    }
    setAnsverId(null);
  }, [counter]);

  const isAnsver = typeof ansverId === "number";
  return (
    <>
      <DivQuestions>
        <DivImg>
          <Znamya
            dangerouslySetInnerHTML={{ __html: currentQuestion.znamya }}
          ></Znamya>
        </DivImg>
        <DivTitle>
          <p>{currentQuestion.question}</p>
        </DivTitle>
        <Line></Line>
      </DivQuestions>
      <ContainerQ>
        {currentQuestion.answers.map((e) => {
          return (
            <ButtonNew
              disabled={isAnsver}
              flag={
                isAnsver
                  ? getButtonStatus(e.id, currentQuestion.correctAnswersIds[0])
                  : "black"
              }
              onClick={() => {
                setAnsverId(e.id);
              }}
              key={e.id}
            >
              {e.label}
            </ButtonNew>
          );
        })}
      </ContainerQ>
      <ButtonCont>
        {isAnsver && (
          <ButtonNext
            onClick={() => {
              postQuestions();
              setCounter(counter + 1);
            }}
            disabled={!isAnsver}
          >
            Далее
          </ButtonNext>
        )}
      </ButtonCont>
    </>
  );
}

export default Questions;
