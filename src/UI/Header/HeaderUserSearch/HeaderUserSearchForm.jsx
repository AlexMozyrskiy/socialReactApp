import React from "react";

const HeaderUserSearchForm = (props) => {
    return (
        <form className="header__search">
            <input type="text" className="header__search-field" placeholder="Search friend by id" />
            <button className="button button_header-search">Search</button>
            <div className="loader loader_header-searchByIdButton displaynone">
                <div id="fountainG_1" className="fountainG"></div>
                <div id="fountainG_2" className="fountainG"></div>
                <div id="fountainG_3" className="fountainG"></div>
            </div>
        </form>
    );
}

export default HeaderUserSearchForm;