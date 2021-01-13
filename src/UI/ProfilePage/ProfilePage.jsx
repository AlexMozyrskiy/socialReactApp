import React from "react";
import ButtonPreloader from "../common/ButtonPreloader";

const ProfilePage = () => {
    return (
        <div className="grid-wrapper__content profile">
            <form action="#">
                <div className="profile__item-wrapper">
                    <p className="profile__item-title">My Status:</p>{" "}<input className="profile__item" type="text"
                        placeholder="Some Previos Status or 'Enter Your Status'" />
                </div>
                <div className="profile__item-wrapper">
                    <p className="profile__item-title">My Name:</p>{" "}<input className="profile__item" type="text"
                        placeholder="Some Previos Name or 'Enter Your Name'" />
                </div>
                <div className="profile__item-wrapper">
                    <p className="profile__item-title">Looking for a Job:</p>{" "}<input className="profile__item-checkbox"
                        type="checkbox" />
                </div>
                <div className="profile__item-wrapper">
                    <p className="profile__item-title">Job Description:</p>{" "}<input className="profile__item" type="text"
                        placeholder="Some Previos Job Description or 'Enter Your Job Description'" />
                </div>
                <div className="profile__contacts">
                    <p className="profile__contacts-title">My Contacts:</p>{" "}
                    <ul className="profile__contacts-ul">
                        <li>facebook:{" "}<input className="profile__item" type="text"
                            placeholder="Some Previos facebook URL or 'Enter facebook'" /></li>
                        <li>website:{" "}<input className="profile__item" type="text"
                            placeholder="Some Previos website URL or 'Enter website'" /></li>
                        <li>VK:{" "}<input className="profile__item" type="text"
                            placeholder="Some Previos VK URL or 'Enter VK'" /></li>
                        <li>twitter:{" "}<input className="profile__item" type="text"
                            placeholder="Some Previos twitter URL or 'Enter twitter'" /></li>
                        <li>instagram:{" "}<input className="profile__item" type="text"
                            placeholder="Some Previos instagram URL or 'Enter instagram'" /></li>
                        <li>youtube:{" "}<input className="profile__item" type="text"
                            placeholder="Some Previos youtube URL or 'Enter youtube'" /></li>
                        <li>github:{" "}<input className="profile__item" type="text"
                            placeholder="Some Previos github URL or 'Enter github'" /></li>
                        <li>mainLink:{" "}<input className="profile__item" type="text"
                            placeholder="Some Previos mainLink URL or 'Enter mainLink'" /></li>
                    </ul>
                </div>
                <button className="button button_profile button_pos-r">Save Changes</button>

                <ButtonPreloader displayNone={true} dotsCount={10} classes={["loader"]} />

            </form>
            <div className="profile__photo">
                <p>My Photo:</p>
                <img src="./img/mask.jpg" alt="photo" className="profile__photo-img" />
                <label className="button button_profile-photo">
                    <input type="file" />Select Photo
                </label>

                <ButtonPreloader displayNone={true} dotsCount={10} classes={["loader"]} />
                
            </div>
        </div>
    );
}

export default ProfilePage;