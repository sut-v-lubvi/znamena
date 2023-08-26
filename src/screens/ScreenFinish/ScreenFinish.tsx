import { ResultType } from "../../App";
import Finish from "../../components/Finish/Finish";
export interface FinishProps {
  result: ResultType[];
}
export const ScreenFinish = ({ result }: FinishProps) => {
  return <Finish result={result} />;
};
