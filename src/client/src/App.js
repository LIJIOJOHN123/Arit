import React, { Fragment } from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import { init } from "./redux/reducers/index";

const App = () => {
  const store = init();
  return (
    <Provider store={store}>
      <Fragment>
        <Router />
      </Fragment>
    </Provider>
  );
};

export default App;
