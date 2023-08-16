import { connect } from "react-redux";
import Tests from "../../components/Tests/Tests";

const ScreenTests = (props: any) => {
  return <Tests />;
};
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTests);
