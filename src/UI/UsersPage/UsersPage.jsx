import React from "react";
import AppPreloader from "../common/AppPreloader";
import UsersPageSingleUser from "./UsersPageSingleUser/UsersPageSingleUser";
import cn from "classnames";
import ButtonPreloader from "../common/ButtonPreloader";

const UsersPage = (props) => {
    return (
        <div className="grid-wrapper__content users">
            { props.isPreloaderActive
                ? <AppPreloader />
                : <>
                    <div className="users__pagination-wrapper">
                        <div className="users__pagination">
                            <span className="users__pagination-single-span">&larr;</span>

                            <span className="users__pagination-single-span users__pagination-single-span_active">1</span>
                            <span className="users__pagination-single-span">2</span>
                            <span className="users__pagination-single-span">3</span>
                            <span className="users__pagination-single-span">4</span>
                            <span className="users__pagination-single-span">5</span>
                            <span className="users__pagination-single-span">6</span>
                            <span className="users__pagination-single-span">7</span>
                            <span className="users__pagination-single-span">8</span>
                            <span className="users__pagination-single-span">9</span>
                            <span className="users__pagination-single-span">10</span>

                            <span className="users__pagination-single-span">...</span>
                            <span className="users__pagination-single-span">Last Page</span>

                            <span className="users__pagination-single-span">&rarr;</span>
                        </div>
                    </div>
                    <div className="users__users">

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
                            <button className={cn("button", "button_show-more-users", { "displaynone": props.isButtonLoadMoreUsersClicked })} onClick={() => props.loadNextPartOfUsers(props.currentPage + 1)}>Show More</button>
                            <ButtonPreloader displayNone={!props.isButtonLoadMoreUsersClicked} dotsCount={10} classes={["loader", "button_show-more-users"]} />
                        </div>
                    </div>
                </>

            }



        </div>
    );
}

export default UsersPage;