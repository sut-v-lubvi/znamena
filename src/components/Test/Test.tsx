import { useEffect, useState } from "react";
import Questions from "../../common/components/Questions/Questions";
import { DivContainerTests, DivTest } from "./TestStyled";
import { TestProps } from "./TestType";
import { QuestionType } from "../../api/data";

function Test({ currentTest }: TestProps) {
  const [currentId, setCurrentId] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(
    currentTest.questions[0]
  );

  useEffect(() => {
    setCurrentQuestion(currentTest.questions[currentId]);
  }, [currentId]);

  const postQuestions = () => {
    console.log("postQuestions");
    if (currentId === currentTest.questions.length - 1) return;
    else {
      setCurrentId(currentId + 1);
    }
  };
  return (
    <DivContainerTests>
      <DivTest>
        <Questions
          numberQuestions={currentTest.questions.length}
          currentTestId={currentTest.id}
          postQuestions={postQuestions}
          currentQuestion={currentQuestion}
        />
      </DivTest>
    </DivContainerTests>
  );
}

export default Test;
