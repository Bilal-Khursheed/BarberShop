import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homepage from "./common/homepage";
import Login from "./common/login";
import signup from "./common/signup";
import schedule from "./innerpages/schedule";
import ScheduleList from "./innerpages/scheduleList";
import services from "./innerpages/services";
import team from "./innerpages/team";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={signup} />
        <Route path="/team" component={team} />
        <Route path="/services" component={services} />
        <Route path="/schedule" component={schedule} />
        <Route path="/scheduleList" component={ScheduleList} />
      </Switch>
    </Router>
  );
}

export default App;
