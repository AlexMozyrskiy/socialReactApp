import React from "react";
import ButtonPreloader from "../../common/ButtonPreloader";
import cn from "classnames";

const HeaderUserSearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)} className="header__search">
            <input
                name="id"
                ref={ props.register( {
                    validate: {
                        isValueInteger: value => Number.isInteger(Number(value)),
                        isValuePositive: value => Number(value) > 0
                        // positive: value => parseInt(value, 10) > 0,
                        // lessThanTen: value => parseInt(value, 10) < 10 || 'should be lower than 10',
                      }
                    } ) }
                type="text"
                className="header__search-field"
                placeholder="Search friend by id" />

            { props.errors
                && props.errors.type === "isValueInteger"
                && <p className="animate__animated animate__lightSpeedInRight error__message error_header-searchform">Value must be Integer</p>
            }

            { props.errors
                && props.errors.type === "isValuePositive"
                && <p className="animate__animated animate__lightSpeedInRight error__message error_header-searchform">Value must be Positive</p>
            }

            <button className={cn("button", "button_header-search", {"displaynone": props.isSearchButtonClicked})}>Search</button>

            <ButtonPreloader displayNone={!props.isSearchButtonClicked} dotsCount={3} classes={["loader", "loader_header-searchByIdButton"]} />
        </form>
    );
}

export default HeaderUserSearchForm;