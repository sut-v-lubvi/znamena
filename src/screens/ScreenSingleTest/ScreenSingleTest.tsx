import { useParams } from "react-router-dom";
import Test from "../../components/Test/Test";
import { dataTests } from "../../api/data";

const ScreenSingleTest = () => {
  const { id } = useParams();
  const currentTest = dataTests.tests.find((item) => (item.id = id));
  console.log({ id, currentTest });

  return <Test currentTest={currentTest} />;
};

export default ScreenSingleTest;
