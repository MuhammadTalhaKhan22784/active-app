import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Question1 from "../screens/1question/main";
import Question2 from "../screens/3question/main";
import Question3 from "../screens/4question/main";
import MultipleChoices1 from "../screens/MultipleChoices1/main";
import MultipleChoices2 from "../screens/MultipleChoices2/main";
import MultipleChoices3 from "../screens/MultipleChoices3/main";
import MultipleChoices4 from "../screens/MultipleChoices4/main";
import MultipleChoices5 from "../screens/MultipleChoices5/main";
import MultipleChoicesP2 from "../screens/MultipleChoicesP2/main";
import WeeklyProgram1 from "../screens/1weeklyProgramTimer/main";
import WeeklyProgram1Error from "../screens/1weeklyProgramError/main";
import ExercisePage from "../screens/exercisePage/main";
import ExercisePageMain from "../screens/exercisePageMain/main";
import InboxReply from "../screens/inboxReply/main";
import LoginPage from "../screens/loginPage/main";
import PersonalAreaPage from "../screens/PersonalAreaPage/main";
import PersonalAreaPageNew from "../screens/PersonalAreaPageNew/main";
import PersonalAreaPageTry from "../screens/PersonalAreaPageTry/main";

const DesktopRoutes = () => {
  return (
    <>
      <div>
        <Router>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/question/mobile">
            <Question1 />
          </Route>
          <Route exact path="/q2">
            <Question2 />
          </Route>
          <Route exact path="/q3">
            <Question3 />
          </Route>
          <Route exact path="/mc1">
            <MultipleChoices1 />
          </Route>
          <Route exact path="/mc2">
            <MultipleChoices2 />
          </Route>
          <Route exact path="/mc3">
            <MultipleChoices3 />
          </Route>
          <Route exact path="/mc4">
            <MultipleChoices4 />
          </Route>
          <Route exact path="/mc5">
            <MultipleChoices5 />
          </Route>
          <Route exact path="/mcp2">
            <MultipleChoicesP2 />
          </Route>
          <Route exact path="/weekly/program-1">
            <WeeklyProgram1 />
          </Route>
          <Route exact path="/wpe">
            <WeeklyProgram1Error />
          </Route>
          <Route exact path="/ep">
            <ExercisePage />
          </Route>
          <Route exact path="/exercise/page-main">
            <ExercisePageMain />
          </Route>
          <Route exact path="/inbox-reply">
            <InboxReply />
          </Route>
          <Route exact path="/personal/subscribe">
            <PersonalAreaPage />
          </Route>
          <Route exact path="/personal/new-mobile">
            <PersonalAreaPageNew />
          </Route>
          <Route exact path="/personal/try-mobile">
            <PersonalAreaPageTry />
          </Route>
          <Route path="*">{}</Route>
        </Router>
      </div>
    </>
  );
};

export default DesktopRoutes;
