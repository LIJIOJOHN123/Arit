import React, { Fragment, useEffect } from "react";
import Router from "./Router";
import { Provider } from "react-redux";
import { init } from "./redux/reducers/index";
import { loadUser } from "./redux/actions/auth";
import setAuthToken from "./utils/setAuth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  const store = init();
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Router />
      </Fragment>
    </Provider>
  );
};

export default App;
