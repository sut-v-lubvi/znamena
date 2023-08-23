import { useEffect, useState } from "react";
import Button from "../../common/components/ButtonTest/Button";
import Questions from "../../common/components/Test/Questions";
import { DivButton, DivContainerTests, DivTest } from "./TestStyled";
import { TestProps } from "./TestType";
import { QuestionType } from "../../api/data";

function Test({ currentTest }: TestProps) {
  console.log("Test");
  const [currentId, setCurrentId] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(
    currentTest.questions[0]
  );

  useEffect(() => {
    setCurrentQuestion(currentTest.questions[currentId]);
    console.log(currentTest.questions[currentId]);
  }, [currentId]);

  const prevQuestions = () => {
    if (currentId === 0) return;
    else {
      setCurrentId(currentId - 1);
      console.log(currentId);
    }
  };
  const postQuestions = () => {
    if (currentId === currentTest.questions.length - 1) return;
    else {
      setCurrentId(currentId + 1);
      console.log(currentId);
    }
  };
  return (
    <DivContainerTests>
      <DivTest>
        <Questions currentQuestion={currentQuestion} />
      </DivTest>
      <DivButton>
        <Button prevQuestions={prevQuestions} postQuestions={postQuestions} />
      </DivButton>
    </DivContainerTests>
  );
}

export default Test;
