import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderContainer from "./UI/Header/HeaderContainer";
import './App.css';
import UsersPage from "./UI/UsersPage/UsersPage";
import NotFoundPage from "./UI/NotFoundPage";
import ProfilePageContainer from "./UI/ProfilePage/ProfilePageContainer";
import MessagesPageContainer from './UI/MessagesPage/MessagesPageContainer';
import LoginModalWindowContainer from "./UI/LoginModalWindow/LoginModalWindowContainer";
import SideBarContainer from "./UI/SideBar/SideBarContainer";
import { getIsAppInitializedSelector } from "./BLL/initializedApp/selectors";
import { initializedAppThunkCreator } from "./BLL/initializedApp/thunkCreators";
import { getIsLoggedInSelector } from "./BLL/authUserData/selectors";
import { connect } from "react-redux";
import AppPreloader from "./UI/common/Prloader";

const App = (props) => {

  useEffect( () => {
    props.initializedAppThunkCreator();
  }, [props.isLoggedIn]);

  if(!props.isAppInitialized) {
    return <AppPreloader />
  }

  return (
    <>
      <HeaderContainer />

      <div className="container">

        <div className="grid-wrapper">

          <SideBarContainer />

          <LoginModalWindowContainer />

          <Switch>
            <Route exact path="/" render={() => <ProfilePageContainer />} />
            <Route path='/users' render={() => <UsersPage />} />
            <Route path='/profile' render={() => <ProfilePageContainer />} />
            <Route path='/messages' render={() => <MessagesPageContainer />} />
            <Route path='*' render={() => <NotFoundPage />} />
          </Switch>

        </div>

      </div>


    </>
  );
}


const mapStateToProps = (state) => {
  return {
    isAppInitialized: getIsAppInitializedSelector(state),
    isLoggedIn: getIsLoggedInSelector(state)
  }
}

export default connect(mapStateToProps, { initializedAppThunkCreator })(App);