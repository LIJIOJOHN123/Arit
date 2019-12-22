import Loadable from "react-loadable";
import Loading from "./Loading";

export const ChannelPage = Loadable({
  loader: () => import("../Channels/List"),
  loading: Loading
});
export const CommentPage = Loadable({
  loader: () => import("../Comments/List"),
  loading: Loading
});

export const HomePage = Loadable({
  loader: () => import("../Home/List"),
  loading: Loading
});

export const ArticlePage = Loadable({
  loader: () => import("../Articles/index"),
  loading: Loading
});

export const SingleArticlePage = Loadable({
  loader: () => import("../Articles/Article Details/index"),
  loading: Loading
});
export const SingleChannelPage = Loadable({
  loader: () => import("../Channels/ChannelDetails/index"),
  loading: Loading
});
