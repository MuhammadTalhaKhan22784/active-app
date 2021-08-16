import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inbox from "../Pages/Inbox";
import Header from "../Layout/Header";
import InboxReply from "../Pages/InboxReply";
import PersonalAreaSubs from "../Pages/PersonalAreaSubs";
import PersonalAreaNewMobile from "../Pages/PersonalAreaNewMobile";
import PersonalAreaTryMobile from "../Pages/PersonalAreaTryMobile";
import QusetionMobile from "../Pages/QusetionMobile";
import ExercisePageMain from "../Pages/ExercisePageMain";
import WeeklyProgram from "../Pages/WeeklyProgram";
const AppRoute = () => {
  return (
    <>
      <Router>
        {/* <div className="mob-view"> */}
          <Header />
          <Switch>
            <Route exact path="/inbox" component={Inbox}></Route>
            <Route exact path="/inbox-reply" component={InboxReply}></Route>
            <Route
              exact
              path="/personal/subscribe"
              component={PersonalAreaSubs}
            ></Route>
            <Route
              exact
              path="/personal/new-mobile"
              component={PersonalAreaNewMobile}
            ></Route>
            <Route
              exact
              path="/personal/try-mobile"
              component={PersonalAreaTryMobile}
            ></Route>
            <Route
              exact
              path="/question/mobile"
              component={QusetionMobile}
            ></Route>
            <Route
              exact
              path="/exercise/page-main"
              component={ExercisePageMain}
            ></Route>
            <Route
              exact
              path="/weekly/program-1"
              component={WeeklyProgram}
            ></Route>
          </Switch>
        {/* </div> */}
      </Router>
    </>
  );
};

export default AppRoute;
