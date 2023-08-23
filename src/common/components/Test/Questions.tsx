import { useForm } from "react-hook-form";
import {
  DivImg,
  DivInput,
  DivQuestions,
  DivTitle,
  FormTest,
  InputT,
  Line,
} from "./QuestionsStyled";
import { QuestionProps } from "./QuestionsType";

type InputT = {
  id: number;
  answer: boolean;
};

function Questions({ currentQuestion }: QuestionProps) {
  // const {register, handleSubmit} = useForm<InputT>()
  return (
    <>
      <DivQuestions>
        <DivImg></DivImg>
        <DivTitle>
          <p>{currentQuestion.question}</p>
        </DivTitle>
        <Line></Line>
      </DivQuestions>
      <FormTest action="formdata" method="POST" name="form1">
        {currentQuestion.answers.map((e) => {
          return (
            <DivInput key={e.id}>
              <InputT type="checkbox" />
              {e.label}
            </DivInput>
          );
        })}
        {/* <DivInput>
          <InputT type="checkbox" />
          {currentQuestion.answers[0]}
        </DivInput>
        <DivInput>
          <InputT type="checkbox" />
          Параклит
        </DivInput>
        <DivInput>
          <InputT type="checkbox" />
          Стратья светлая
        </DivInput>
        <DivInput>
          <InputT type="checkbox" />
          Кулизьма малая
        </DivInput> */}
      </FormTest>
    </>
  );
}

export default Questions;
