import {
  DivImg,
  DivInput,
  DivQuestions,
  DivTitle,
  FormTest,
  InputT,
  Line,
} from "./TestStyled";

function Test() {
  return (
    <>
      <DivQuestions>
        <DivImg></DivImg>
        <DivTitle>
          <p>Как называется это знамя?</p>
        </DivTitle>
        <Line></Line>
      </DivQuestions>
      <FormTest action="formdata" method="POST" name="form1">
        <DivInput>
          <InputT type="checkbox" />
          Голубчик борзый
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
        </DivInput>
      </FormTest>
    </>
  );
}

export default Test;
