import React from "react";
// import { withRouter } from "react-router-dom";
import ButtonPreloader from "../../../common/ButtonPreloader";

const OwnerProfilePagePhoto = (props) => {
    debugger

    return (
        <div className="profile__photo">
            <p>My Photo:</p>
            <img src={props.largePhoto} alt="photo" className="profile__photo-img" />
            <label className="button button_profile-photo">
                <input type="file" />Select Photo
            </label>

            <ButtonPreloader displayNone={true} dotsCount={10} classes={["loader"]} />
        </div>
    );
}

export default OwnerProfilePagePhoto;