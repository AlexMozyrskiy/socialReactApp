import React from "react";
import defaultPhoto from "../../../assets/img/default_photo.png"

const SomeoneElseProfilePage = (props) => {
    return (
        <div className="grid-wrapper__content profile">
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Status:</p>{" "}<p className="profile__item">{ props.status ? props.status : "I Have No Status" }</p>
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Name:</p>{" "}<p className="profile__item">{ props.fullName ? props.fullName : "I Have No Name" }</p>
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">About Me:</p>{" "}<p className="profile__item">{ props.aboutMe ? props.aboutMe : "I Have No About Me Information" }</p>
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Looking for a Job:</p>{" "}<p className="profile__item">{ props.lookingForAJob ? "Yes" : "No" }</p>
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Job Description:</p>{" "}<p className="profile__item">{ props.lookingForAJobDescription ? props.lookingForAJobDescription : "No Job Description" }</p>
            </div>
            <div className="profile__contacts">
                <p className="profile__contacts-title">My Contacts:</p>{" "}
                <ul className="profile__contacts-ul">
                    { props.contactsKeysArray.map(contactKey => {
                        return <li key={contactKey}>{contactKey + ": "} { props.contacts[contactKey] ? <a href={ props.contacts[contactKey] } target="_blank">{ props.contacts[contactKey] }</a> : "No " + contactKey + " Information" } </li>
                    }) }
                </ul>
            </div>
            <div className="profile__photo">
                <p>My Photo:</p>
                <img src={props.largePhoto ? props.largePhoto : defaultPhoto} alt="photo" className="profile__photo-img" />
            </div>
        </div>
    );
}

export default SomeoneElseProfilePage;