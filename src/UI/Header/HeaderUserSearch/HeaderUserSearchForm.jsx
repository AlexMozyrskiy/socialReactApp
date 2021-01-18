import React from "react";
import { NavLink } from "react-router-dom";
import ButtonPreloader from "../../common/ButtonPreloader";

const HeaderUserSearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)} className="header__search">
            <input
                name="id"
                ref={props.register({ validate: props.isIntegerValidation })}
                type="text"
                className="header__search-field"
                placeholder="Search friend by id" />

            { props.errors
                && props.errors.type === "validate"
                && <p className="animate__animated animate__lightSpeedInRight error__message error_header-searchform">
                    Value must be Integer
            </p>}

            {/* <NavLink to={"/profile/" + props.headerSearchFormValue} className="button button_header-search"
                >Search</NavLink> */}
            <button className="button button_header-search">Search</button>

            <ButtonPreloader displayNone={true} dotsCount={3} classes={["loader", "loader_header-searchByIdButton"]} />
        </form>
    );
}

export default HeaderUserSearchForm;