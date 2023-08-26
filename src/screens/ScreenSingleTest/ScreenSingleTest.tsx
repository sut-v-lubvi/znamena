import { useParams } from "react-router-dom";
import Test from "../../components/Test/Test";
import { dataTests } from "../../api/data";
import { ResultType } from "../../App";

interface ScreenTestProps {}

const ScreenSingleTest = () => {
  const { id } = useParams();
  const currentTest = dataTests.tests.find((item) => (item.id = id));

  return <Test currentTest={currentTest} />;
};

export default ScreenSingleTest;
