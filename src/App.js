import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import VolunteerList from './Components/VolunteerList/VolunteerList';
import PersonalTask from './Components/PersonalTask/PersonalTask';
import AddFakeData from './Components/AddFakeData/AddFakeData';
import { createContext } from 'react';
import AddEvent from './Components/AddEvent/AddEvent';
import Header from './Components/Header/Header';
import Logo from './Components/Logo/Logo';
import NotFound from './Components/NotFound/NotFound';


export const UserContext = createContext();
function App(props) {
  let homeHeader = true;
  let header = false;
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
        <Switch>
          <Route path="/home">
            <Header homeHeader = {homeHeader}></Header>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Logo></Logo>
            <Login></Login>
          </Route>
          <PrivateRoute path="/register/:activityName">
            <Logo></Logo>
            <RegistrationForm></RegistrationForm>
          </PrivateRoute>
          <Route path="/admin/volunteerList">
            <VolunteerList></VolunteerList>
          </Route>
          <Route path="/personalTask">
          <Header homeHeader = {header}></Header>
            <PersonalTask></PersonalTask>
          </Route>
          <Route path="/admin/addEvent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/addFakeData">
            <AddFakeData></AddFakeData>
          </Route>
          <Route exact path="/">
          <Header homeHeader = {homeHeader}></Header>
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
