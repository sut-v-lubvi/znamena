import { ButtonT } from "./ButtonStyled";
import { ButtonProps } from "./ButtonType";

function Button({ prevQuestions, postQuestions }: ButtonProps) {
  return (
    <>
      <ButtonT onClick={prevQuestions} flag={true}>
        {"<"}
      </ButtonT>
      <ButtonT onClick={postQuestions} flag={false}>
        {">"}
      </ButtonT>
    </>
  );
}

export default Button;
