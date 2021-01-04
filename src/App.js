import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderContainer from "./UI/Header/HraderContainer";
import './App.css';
import UsersPage from "./UI/UsersPage/UsersPage";
import NotFoundPage from "./UI/NotFoundPage";
import ProfilePageContainer from "./UI/ProfilePage/ProfilePageContainer";
import MessagesPageContainer from './UI/MessagesPage/MessagesPageContainer';

const App = () => {
  return (
    <>
      <HeaderContainer />

      <div class="container">

        <div class="grid-wrapper">

          <Switch>
            <Route path='/users' render={ () => <UsersPage /> } />
            <Route path='/profile' render={ () => <ProfilePageContainer /> } />
            <Route path='/messages' render={ () => <MessagesPageContainer /> } />
            <Route path='*' render={ () => <NotFoundPage /> } />
          </Switch>

        </div>

      </div>


    </>
  );
}

export default App;