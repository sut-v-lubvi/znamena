import { ResultType } from "../../../App";
import { QuestionType } from "../../../api/data";
export interface QuestionProps {
  numberQuestions: number;
  setResult: () => ResultType;
  currentTestId: number;
  postQuestions: () => void;
  currentQuestion: QuestionType;
}
