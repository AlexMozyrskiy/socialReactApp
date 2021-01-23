import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderContainer from "./UI/Header/HeaderContainer";
import './App.css';
import UsersPageContainer from "./UI/UsersPage/UsersPageContainer";
import NotFoundPage from "./UI/NotFoundPage";
import ProfilePageContainer from "./UI/ProfilePage/ProfilePageContainer";
import MessagesPageContainer from './UI/MessagesPage/MessagesPageContainer';
import LoginModalWindowContainer from "./UI/LoginModalWindow/LoginModalWindowContainer";
import SideBarContainer from "./UI/SideBar/SideBarContainer";
import { getIsAppInitializedSelector } from "./BLL/initializedApp/selectors";
import { initializedAppThunkCreator } from "./BLL/initializedApp/thunkCreators";
import { getIsLoggedInSelector, getOwnerIdSelector } from "./BLL/authUserData/selectors";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AppPreloader from "./UI/common/AppPreloader";

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
            { /* Если залогинены редиректнет на свой парофиль, если нет на профиль Димыча */}
            {
              props.isLoggedIn
              ? <Route exact path="/" render={() => <Redirect to={"profile/" + props.ownerId} />} />
              : <Route exact path="/" render={() => <Redirect to={"profile/" + 2} />} />
            }
            
            <Route path='/users' render={() => <UsersPageContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfilePageContainer />} />
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
    isLoggedIn: getIsLoggedInSelector(state),
    ownerId: getOwnerIdSelector(state)
  }
}

export default connect(mapStateToProps, { initializedAppThunkCreator })(App);