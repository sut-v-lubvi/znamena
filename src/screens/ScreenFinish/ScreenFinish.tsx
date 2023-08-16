import { connect } from "react-redux";
import Finish from "../../components/Finish/Finish";

export const ScreenFinish = () => {
  return <Finish />;
};

export default connect()(ScreenFinish);
