import React from "react";

const UsersPageSingleUser = () => {
    return (
        <div className="users__single-user">
            <div className="users__user-photo">
                <img src="./img/mask.jpg" alt="User" className="users__user-photo-img" />
            </div>
            <div className="users__user-info">
                <h2 className="users__user-name"><a href="#">User Name</a></h2>
                <p className="users__user-status">Status: Some User Status</p>
                <p className="users__user-is-looking-job">Я ищу работу</p>
                <p className="users__user-looking-job-description">Описание работы:</p>
            </div>
            <div className="users__add-friend-button">
                <button className="button button_add-friend">Add Friend</button>
                <div className="loader loader_header-loginbutton displaynone">
                    <div id="fountainG_1" className="fountainG"></div>
                    <div id="fountainG_2" className="fountainG"></div>
                    <div id="fountainG_3" className="fountainG"></div>
                </div>
            </div>
        </div>
    );
}

export default UsersPageSingleUser;