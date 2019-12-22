import React, { Fragment } from "react";
import RecipeReviewCard from "./Card";
import ChannelList from "../List";
import CenteredTabs from "./SubHeading";
const ChannelDetails = () => {
  return (
    <Fragment>
      <RecipeReviewCard />
      <CenteredTabs />
      <ChannelList />
    </Fragment>
  );
};

export default ChannelDetails;
