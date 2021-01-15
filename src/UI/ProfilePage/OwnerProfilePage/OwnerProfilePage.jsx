import React from "react";
// import { withRouter } from "react-router-dom";
import OwnerProfilePageFormContainer from "./OwnerProfilePageForm/OwnerProfilePageFormContainer";
import OwnerProfilePagePhoto from "./OwnerProfilePagePhoto/OwnerProfilePagePhoto";

const OwnerProfilePage = (props) => {
    
    return (
        <div className="grid-wrapper__content profile">

            <OwnerProfilePageFormContainer />
            
            <OwnerProfilePagePhoto />

        </div>
    );
}

export default OwnerProfilePage;