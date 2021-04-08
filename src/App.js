import "./App.css";
import { AdminDashboard, BLogin, BSignUp, Main, MainView, NavBar, SellersMainView, WorkersMainView } from "./imports/Imports";
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
        <Route path="/workersMV" component={WorkersMainView} />
        <Route path="/sellersMV" component={SellersMainView} />
      </Switch>
    </>
  );
}

export default App;
