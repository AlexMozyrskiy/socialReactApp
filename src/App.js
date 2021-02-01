import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderContainer from "./UI/Header/HeaderContainer";
import './App.css';
import UsersPageContainer from "./UI/UsersPage/UsersPageContainer";
import NotFoundPage from "./UI/NotFoundPage";
import ProfilePageContainer from "./UI/ProfilePage/ProfilePageContainer";
import MessagesPageContainer from './UI/MessagesPage/MessagesPageContainer';
import LoginModalWindowContainer from "./UI/LoginModalWindow/LoginModalWindowContainer";
import SideBarContainer from "./UI/SideBar/SideBarContainer";
import Footer from "./UI/Footer/Footer";
import { getIsAppInitializedSelector } from "./BLL/initializedApp/selectors";
import { initializedAppThunkCreator } from "./BLL/initializedApp/thunkCreators";
import { setRunUseEffectAppComponent } from "./BLL/authUserData/actionCreators";
import { getIsLoggedInSelector, getOwnerIdSelector, getRunUseEffectAppComponent } from "./BLL/authUserData/selectors";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AppPreloader from "./UI/common/AppPreloader";

const App = (props) => {

  useEffect( () => {
    if(props.runUseEffectAppComponent) {    // для того чтобы в useEffect в App.js делать запрос на сервер авторизован ли пользователь(me) только 1 раз при логине и логауте. useEffect делает 2 раза так как зависит от свойства стейта isLoggedIn, а при авторизации и логауте оно меняется и получается запрос уходит 2 раза
      props.setRunUseEffectAppComponent(false);
      props.initializedAppThunkCreator();
    }
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
            <Route path='/profile/:userId' render={() => <ProfilePageContainer />} />
            <Route path='/messages' render={() => <MessagesPageContainer />} />
            <Route path='*' render={() => <NotFoundPage />} />
          </Switch>

        </div>

      </div>

      <Footer />

    </>
  );
}


const mapStateToProps = (state) => {
  return {
    isAppInitialized: getIsAppInitializedSelector(state),
    isLoggedIn: getIsLoggedInSelector(state),
    ownerId: getOwnerIdSelector(state),
    runUseEffectAppComponent: getRunUseEffectAppComponent(state)
  }
}

export default connect(mapStateToProps, { initializedAppThunkCreator, setRunUseEffectAppComponent })(App);