import "./App.css";
import { AdminDashboard, BLogin, BSignUp, Main, MainView, NavBar } from "./imports/Imports";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/businessLogin" component={BLogin} />
        <Route path="/businessSignUp" component={BSignUp} />
        <Route path="/adminDashboard/:id" component={AdminDashboard} />
        <Route path="/mainView" component={MainView} />
      </Switch>
    </>
  );
}

export default App;
