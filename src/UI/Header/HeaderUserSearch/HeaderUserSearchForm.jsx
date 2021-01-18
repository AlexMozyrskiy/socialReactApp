import React from "react";
import ButtonPreloader from "../../common/ButtonPreloader";
import cn from "classnames";

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
            <button className={cn("button", "button_header-search", {"displaynone": props.isSearchButtonClicked})}>Search</button>

            <ButtonPreloader displayNone={!props.isSearchButtonClicked} dotsCount={3} classes={["loader", "loader_header-searchByIdButton"]} />
        </form>
    );
}

export default HeaderUserSearchForm;