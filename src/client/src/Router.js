import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/layouts/Menu/Menu";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/Alert/Alert";
import {
  ChannelPage,
  CommentPage,
  HomePage,
  ArticlePage,
  SingleArticlePage,
  SingleChannelPage
} from "./components/Loading/Loadable";

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Fragment>
        <Alert />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/channels" exact component={ChannelPage} />
          <Route path="/comments" exact component={CommentPage} />
          <Route path="/articles" exact component={ArticlePage} />
          <Route path="/articles/:id" exact component={SingleArticlePage} />
          <Route path="/channels/:id" exact component={SingleChannelPage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
