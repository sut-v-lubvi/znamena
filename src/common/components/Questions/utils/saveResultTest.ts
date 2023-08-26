import { type } from "os";
import { ResultType } from "../../../../App";
import { getOldTestsAnsverData } from "./gettOldTestsAnsverData";

type ResuleCurrentType = {
  currentTestId: number;
  numbCorrAnsver: number;
  numberError: number;
};

export const saveResultTest = (
  numbCorrAnsver: number,
  currentTestId: number,
  setResult: (resultTestsArray: ResultType[]) => void,
  numberQuestions: number
) => {
  console.log("Колличество вопросов: " + numberQuestions);
  let resultCurrentTest: ResuleCurrentType = {
    currentTestId,
    numbCorrAnsver,
    numberError: numberQuestions - numbCorrAnsver,
  };
  debugger;
  if (typeof localStorage.getItem(currentTestId) === "string") {
    let resultCurrentInStorge: ResuleCurrentType = JSON.parse(
      localStorage.getItem(currentTestId)
    );
    if (resultCurrentInStorge.numbCorrAnsver < numbCorrAnsver) {
      localStorage.setItem(currentTestId, JSON.stringify(resultCurrentTest));
    }
  } else {
    localStorage.setItem(currentTestId, JSON.stringify(resultCurrentTest));
  }

  setResult(getOldTestsAnsverData());
};
