import React from "react";
import { NavLink } from "react-router-dom";
import ButtonPreloader from "../../common/ButtonPreloader";

const HeaderUserSearchForm = (props) => {
    return (
        <form className="header__search">
                <input type="text" className="header__search-field" placeholder="Search friend by id"
                value={props.headerSearchFormValue}
                onChange={(e) => props.changeheaderSearchFormValue(e.target.value)}
                onKeyPress={ (e) => props.keyBoardKeyUp(e.key, props.headerSearchFormValue) } />

            <NavLink to={"/profile/" + props.headerSearchFormValue} className="button button_header-search"
                onClick={ () => props.goToUserPage(props.headerSearchFormValue) }>Search</NavLink>
            
            <ButtonPreloader displayNone={true} dotsCount={3} classes={["loader", "loader_header-searchByIdButton"]} />
        </form>
    );
}

export default HeaderUserSearchForm;