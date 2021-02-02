import React from "react";
// import { withRouter } from "react-router-dom";
import ButtonPreloader from "../../../common/ButtonPreloader";

const OwnerProfilePagePhoto = (props) => {
    return (
        <div className="profile__photo">
            <p>My Photo:</p>
            <img src={props.largePhoto} alt="user" className="profile__photo-img" />
            <label className="button button_profile-photo">
                <input type="file" onChange={ (e) => props.onMainAvatarSelected(e.target.files[0]) } />Update Photo
            </label>

            <ButtonPreloader displayNone={true} dotsCount={10} classes={["loader"]} />
        </div>
    );
}

export default OwnerProfilePagePhoto;