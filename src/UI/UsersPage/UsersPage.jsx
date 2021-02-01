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
                            {props.currentPageForPagination === 1           // если текущая страница === 1 не отобразим стрелку влево
                                ? null
                                : <span
                                    className="users__pagination-single-span"
                                    onClick={(e) => props.changePaginationPages((props.currentPageForPagination - 1))}>&larr;     {/* после нажатия на стрелку влево вычислим какая текущая страница должна быть */}
                                </span>
                            }

                            {props.paginationSquares}

                            {props.currentPageForPagination === props.maxCountOfPaginationSquares         // если текущая страница === последняя страница не отобразим троеточие, стрелку вправо и последнюю стрницу после троеточия
                                ? null
                                : <>
                                    <span className="users__pagination-single-span">...</span>
                                    <span
                                        className="users__pagination-single-span"
                                        onClick={(e) => props.changePaginationPages((e.currentTarget.innerHTML))}>{props.maxCountOfPaginationSquares}
                                    </span>
                                    <span
                                        className="users__pagination-single-span"
                                        onClick={(e) => props.changePaginationPages((props.currentPageForPagination + 1))}>&rarr;     {/* после нажатия на стрелку вправо вычислим какая текущая страница должна быть */}
                                    </span>
                                </>
                            }

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