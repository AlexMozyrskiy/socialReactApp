import React from "react";

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
                <p className="profile__item-title">Looking for a Job:</p>{" "}<p className="profile__item">{ props.lookingForAJob ? "Yes" : "No" }</p>
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Job Description:</p>{" "}<p className="profile__item">{ props.lookingForAJobDescription ? props.lookingForAJobDescription : "No Job Description" }</p>
            </div>
            <div className="profile__contacts">
                <p className="profile__contacts-title">My Contacts:</p>{" "}
                <ul className="profile__contacts-ul">
                    { props.contactsKeysArray.map(contactKey => {
                        return <li key={contactKey}>{contactKey + ": "}<a href="#">{ props.contacts[contactKey] }</a></li>
                    }) }
                </ul>
            </div>
            <div className="profile__photo">
                <p>My Photo:</p>
                <img src={props.largePhoto} alt="photo" className="profile__photo-img" />
            </div>
        </div>
    );
}

export default SomeoneElseProfilePage;