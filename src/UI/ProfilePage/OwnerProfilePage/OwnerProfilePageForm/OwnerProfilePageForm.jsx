import React from "react";
import { reduxForm, Field } from "redux-form";
import ButtonPreloader from "../../../common/ButtonPreloader";
import cn from "classnames";

const OwnerProfilePageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Status:</p>{" "}<Field component="input" name="status" className="profile__item" type="text" 
                    placeholder={ props.status ? props.status : "Enter Your Status" } />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Name:</p>{" "}<Field component="input" name="fullName" className="profile__item" type="text"
                    placeholder={ props.fullName ? props.fullName : "Enter Your Name" } />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">About Me:</p>{" "}<Field component="input" name="aboutMe" className="profile__item" type="text"
                    placeholder={ props.aboutMe ? props.aboutMe : "Enter About Me Information" } />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Looking for a Job:</p>{" "}<Field component="input" name="lookingForAJob" className="profile__item-checkbox"
                    type="checkbox" />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Job Description:</p>{" "}<Field component="input" name="lookingForAJobDescription" className="profile__item" type="text"
                    placeholder={ props.lookingForAJobDescription ? props.lookingForAJobDescription : "Enter Your Job Description" } />
            </div>
            <div className="profile__contacts">
                <p className="profile__contacts-title">My Contacts:</p>{" "}
                <ul className="profile__contacts-ul">
                    { props.contactsKeysArray.map(contactKey => {
                        return (<li key={contactKey}>{contactKey + ": "}<Field component="input" name={contactKey} className="profile__item" type="text"
                        placeholder={ props.contacts[contactKey] ? props.contacts[contactKey] : "Enter " + contactKey + " information" } /></li>)
                    }) }
                </ul>
            </div>

            <button className={cn("button", "button_profile", "button_pos-r", {"displaynone": props.isSaveChangesButtonClicked})}>Save Changes</button>

            <ButtonPreloader displayNone={!props.isSaveChangesButtonClicked} dotsCount={10} classes={["loader"]} />

        </form>
    );
}

export default reduxForm({
    // a uniq name for the form
    form: "ownerProfilePage"
})(OwnerProfilePageForm);