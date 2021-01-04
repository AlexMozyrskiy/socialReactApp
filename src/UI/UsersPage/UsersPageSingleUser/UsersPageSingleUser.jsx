import React from "react";

const UsersPageSingleUser = () => {
    return (
        <div class="users__single-user">
            <div class="users__user-photo">
                <img src="./img/mask.jpg" alt="User Photo" class="users__user-photo-img" />
            </div>
            <div class="users__user-info">
                <h2 class="users__user-name"><a href="#">User Name</a></h2>
                <p class="users__user-status">Status: Some User Status</p>
                <p class="users__user-is-looking-job">Я ищу работу</p>
                <p class="users__user-looking-job-description">Описание работы:</p>
            </div>
            <div class="users__add-friend-button">
                <button class="button button_add-friend">Add Friend</button>
                <div class="loader loader_header-loginbutton displaynone">
                    <div id="fountainG_1" class="fountainG"></div>
                    <div id="fountainG_2" class="fountainG"></div>
                    <div id="fountainG_3" class="fountainG"></div>
                </div>
            </div>
        </div>
    );
}

export default UsersPageSingleUser;