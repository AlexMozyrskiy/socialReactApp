import React from "react";
import AppPreloader from "../common/AppPreloader";
import UsersPageSingleUser from "./UsersPageSingleUser/UsersPageSingleUser";
import cn from "classnames";
import ButtonPreloader from "../common/ButtonPreloader";

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

                        <div className="button__show-more-users-wrapper">
                            <button className={cn("button", "button_show-more-users", { "displaynone": false })} onClick={() => props.loadNextPartOfUsers(props.currentPage + 1)}>Show More</button>
                            <ButtonPreloader displayNone={true} dotsCount={10} classes={["loader", "button_show-more-users"]} />
                        </div>
                    </div>

            }



        </div>
    );
}

export default UsersPage;