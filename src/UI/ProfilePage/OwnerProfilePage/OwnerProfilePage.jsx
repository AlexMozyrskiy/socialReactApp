import React from "react";
// import { withRouter } from "react-router-dom";
import OwnerProfilePageFormContainer from "./OwnerProfilePageForm/OwnerProfilePageFormContainer";
import OwnerProfilePagePhotoContainer from "./OwnerProfilePagePhoto/OwnerProfilePagePhotoContainer";

const OwnerProfilePage = (props) => {
    
    return (
        <div className="grid-wrapper__content profile">

            <OwnerProfilePageFormContainer />
            
            <OwnerProfilePagePhotoContainer />

        </div>
    );
}

export default OwnerProfilePage;