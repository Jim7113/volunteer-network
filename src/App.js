import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import AdminPage from "./components/AdminPage/AdminPage";
import AddEvent from "./components/AddEvent/AddEvent";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import VolunteerProfile from "./components/VolunteerProfile/VolunteerProfile";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/manage-user">
            <Login />
          </Route>
          <Route path="/admin/volunteer-list">
            <AdminPage />
          </Route>
          <Route path="/admin/add-event">
            <AddEvent />
          </Route>
          <PrivateRoute path="/register-event/:eventName">
            <RegisterEvent />
          </PrivateRoute>
          <PrivateRoute path="/volunteers/:emailId">
            <VolunteerProfile />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
