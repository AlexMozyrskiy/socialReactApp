import React from "react";
import { reduxForm, Field } from "redux-form";
import ButtonPreloader from "../../../common/ButtonPreloader";
import cn from "classnames";


let OwnerProfilePageForm = (props) => {
    debugger
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
                    type="checkbox" /* onChange={(e) => props.toogleCheckBoxlookingForAJob(e)} */ />
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



const mapStateToProps = (state) => {
    return {
        initialValues: state.authUserData
    }
}

// export default compose(
    
//     connect(mapStateToProps, {  }),
//     reduxForm({
//         form: "ownerProfilePage",
//         initialValues: { lookingForAJob: props.lookingForAJob }
//     }),
// );

export default reduxForm({
    // a uniq name for the form
    form: "ownerProfilePage"
    // initialValues: { lookingForAJob: true }
})(OwnerProfilePageForm);

// OwnerProfilePageForm = reduxForm({
//     form: 'ownerProfilePage',  // a unique identifier for this form,
//   })(OwnerProfilePageForm)
  
//   // You have to connect() to any reducers that you wish to connect to yourself
// export default OwnerProfilePageForm = connect(
//     mapStateToProps,
//     {  }
//   )(OwnerProfilePageForm)