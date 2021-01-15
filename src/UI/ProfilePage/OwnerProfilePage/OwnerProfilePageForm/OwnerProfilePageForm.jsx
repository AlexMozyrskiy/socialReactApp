import React from "react";
import ButtonPreloader from "../../../common/ButtonPreloader";

const OwnerProfilePage = (props) => {
    return (
        <form action="#">
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Status:</p>{" "}<input className="profile__item" type="text"
                    placeholder={ props.status ? props.status: "Enter Your Status" } />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Name:</p>{" "}<input className="profile__item" type="text"
                    placeholder={ props.fullName ? props.fullName: "Enter Your Name" } />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Looking for a Job:</p>{" "}<input className="profile__item-checkbox"
                    type="checkbox" checked={props.lookingForAJob} />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Job Description:</p>{" "}<input className="profile__item" type="text"
                    placeholder={ props.lookingForAJobDescription ? props.lookingForAJobDescription : "Enter Your Job Description" } />
            </div>
            <div className="profile__contacts">
                <p className="profile__contacts-title">My Contacts:</p>{" "}
                <ul className="profile__contacts-ul">
                    { props.contactsKeysArray.map(contactKey => {
                        return (<li>{contactKey + ": "}<input className="profile__item" type="text"
                        placeholder={ props.contacts[contactKey] ? props.contacts[contactKey] : "Enter " + contactKey + " information" } /></li>)
                    }) }
                </ul>
            </div>
            <button className="button button_profile button_pos-r">Save Changes</button>

            <ButtonPreloader displayNone={true} dotsCount={10} classes={["loader"]} />

        </form>
    );
}

export default OwnerProfilePage;