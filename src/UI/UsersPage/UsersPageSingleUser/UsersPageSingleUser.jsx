import React from "react";
import { NavLink } from "react-router-dom";
import defaultPhoto from "../../../assets/img/default_photo.png";
import ButtonPreloader from "../../../UI/common/ButtonPreloader";
import cn from "classnames";

const UsersPageSingleUser = (props) => {
    return (
        <div className="users__single-user">
            <div className="users__user-photo">
                <img src={ props.singleUser.photos.small ? props.singleUser.photos.small : defaultPhoto } alt="User Photo" className="users__user-photo-img" />
            </div>
            <div className="users__user-info">
                <h2 className="users__user-name"><NavLink to={props.singleUser.id ? `/profile/${props.singleUser.id}` : "#" }>{props.singleUser.name}</NavLink></h2>
                <p className="users__user-status">Status: { props.singleUser.status ? props.singleUser.status : "I Have No Status" }</p>
                {/* <p className="users__user-is-looking-job">Я ищу работу</p>
                <p className="users__user-looking-job-description">Описание работы:</p> */}
            </div>
            <div className="users__add-friend-button">
                {
                    props.isLoggedIn
                    ? <button className={cn("button", "button_add-friend", {"displaynone": props.clickedFollowButtonsArray.some((element) => element == props.singleUser.id)})} onClick={() => props.followUnfollowUser(props.singleUser.id, !props.singleUser.followed)}>{ props.singleUser.followed ? "Un Follow User" : "Follow User" }</button>
                    : null
                }
                
                <ButtonPreloader displayNone={!props.clickedFollowButtonsArray.some((element) => element == props.singleUser.id)} dotsCount={3} classes={["loader", "loader_header-loginbutton"]} />
                {/* <div className="loader loader_header-loginbutton displaynone">
                    <div id="fountainG_1" className="fountainG"></div>
                    <div id="fountainG_2" className="fountainG"></div>
                    <div id="fountainG_3" className="fountainG"></div>
                </div> */}
            </div>
        </div>
    );
}

export default UsersPageSingleUser;