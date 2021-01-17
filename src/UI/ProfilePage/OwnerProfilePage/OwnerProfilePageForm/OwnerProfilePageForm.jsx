import React from "react";
import ButtonPreloader from "../../../common/ButtonPreloader";
import cn from "classnames";


let OwnerProfilePageForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit(props.onSubmit) }>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Status:</p>{" "}<input ref={ props.register } name="status" className="profile__item" type="text" 
                    placeholder="Enter Your Status" />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Name:</p>{" "}<input ref={ props.register } name="fullName" className="profile__item" type="text"
                    placeholder="Enter Your Name" />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">About Me:</p>{" "}<input ref={ props.register } name="aboutMe" className="profile__item" type="text"
                    placeholder="Enter About Me Information" />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Looking for a Job:</p>{" "}<input ref={ props.register } name="lookingForAJob" className="profile__item-checkbox"
                    type="checkbox" defaultChecked={props.lookingForAJob} />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Job Description:</p>{" "}<input ref={ props.register } name="lookingForAJobDescription" className="profile__item" type="text"
                    placeholder="Enter Your Job Description" />
            </div>
            <div className="profile__contacts">
                <p className="profile__contacts-title">My Contacts:</p>{" "}
                <ul className="profile__contacts-ul">
                    { props.contactsKeysArray.map(contactKey => {
                        return (<li key={contactKey}>{contactKey + ": "}
                                    <input ref={ props.register } name={contactKey} className="profile__item" type="text"
                                    placeholder={ props[contactKey] ? props[contactKey] : "Enter " + contactKey + " information" }

                                /></li>);
                    }) }
                </ul>
            </div>

            <button className={cn("button", "button_profile", "button_pos-r", {"displaynone": props.isSaveChangesButtonClicked})}>Save Changes</button>

            <ButtonPreloader displayNone={!props.isSaveChangesButtonClicked} dotsCount={10} classes={["loader"]} />

        </form>
    );
}

export default (OwnerProfilePageForm);