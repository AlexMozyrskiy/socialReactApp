import React from "react";
import AppPreloader from "../common/AppPreloader";
import UsersPageSingleUser from "./UsersPageSingleUser/UsersPageSingleUser";

const UsersPage = (props) => {
    return (
        <div className="grid-wrapper__content users">
            {
                props.isPreloaderActive
                    ? <AppPreloader />
                    : <div className="users__users">

                        {
                            props.usersArray.map(singleUser => {
                                return (
                                    <UsersPageSingleUser
                                        key={singleUser.id}
                                        singleUser={singleUser}
                                        followUnfollowUser={props.followUnfollowUser}
                                        isLoggedIn={props.isLoggedIn}
                                        clickedFollowButtonsArray={props.clickedFollowButtonsArray}
                                    />
                                );
                            })
                        }

                    </div>
            }



        </div>
    );
}

export default UsersPage;