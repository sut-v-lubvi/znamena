import Button from "../../common/components/ButtonTest/Button";
import Test from "../../common/components/Test/Test";
import { DivButton, DivContainerTests, DivTest } from "./TestStyled";

function Tests() {
  return (
    <DivContainerTests>
      <DivTest>
        <Test />
      </DivTest>
      <DivButton>
        <Button />
      </DivButton>
    </DivContainerTests>
  );
}

export default Tests;
