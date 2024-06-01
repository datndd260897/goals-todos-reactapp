import { useEffect } from "react";
import ConnectedTodos from "../components/Todos";
import ConnectedGoals from "../components/Goals";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/share";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  if (props.loading === true) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
};

export default connect((state) => ({
  loading: state.loading,
}))(App);
