import Tests from "@/components/Tests/Tests";
import { connect } from "react-redux";

export const ScreenTests = () => {
  return <Tests />;
};

export default connect()(ScreenTests);
