import React from "react";
import ButtonPreloader from "../../../common/ButtonPreloader";
import cn from "classnames";
import InputReactHookForm from "../../../common/InputReactHookForm";


let OwnerProfilePageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Status:</p>{" "}
                <InputReactHookForm
                    register={props.register}
                    CSSclasses={["login__form-input"]}
                    type="text"
                    name="status"
                    errors={props.errors.status}
                    minLength={3}
                    required={true}
                    placeholder={"Enter Your Status"}
                />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">My Name:</p>{" "}
                <InputReactHookForm
                    register={props.register}
                    CSSclasses={["login__form-input"]}
                    type="text"
                    name="fullName"
                    errors={props.errors.fullName}
                    minLength={3}
                    required={true}
                    placeholder={"Enter Your Name"}
                />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">About Me:</p>{" "}
                <InputReactHookForm
                    register={props.register}
                    CSSclasses={["login__form-input"]}
                    type="text"
                    name="aboutMe"
                    errors={props.errors.aboutMe}
                    minLength={3}
                    required={true}
                    placeholder={"Enter About Me Information"}
                />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Looking for a Job:</p>{" "}<input ref={props.register} name="lookingForAJob" className="profile__item-checkbox"
                    type="checkbox" defaultChecked={props.lookingForAJob} />
            </div>
            <div className="profile__item-wrapper">
                <p className="profile__item-title">Job Description:</p>{" "}
                <InputReactHookForm
                    register={props.register}
                    CSSclasses={["login__form-input"]}
                    type="text"
                    name="lookingForAJobDescription"
                    errors={props.errors.lookingForAJobDescription}
                    minLength={3}
                    required={true}
                    placeholder={"Enter Your Job Description"}
                />
            </div>
            <div className="profile__contacts">
                <p className="profile__contacts-title">My Contacts:</p>{" "}
                <ul className="profile__contacts-ul">
                    {props.contactsKeysArray.map(contactKey => {
                        return (<li key={contactKey}>{contactKey + ": "}
                            <input ref={props.register} name={contactKey} className="profile__item" type="text"
                                placeholder={props[contactKey] ? props[contactKey] : "Enter " + contactKey + " information"}

                            /></li>);
                    })}
                </ul>
            </div>

            <button className={cn("button", "button_profile", "button_pos-r", { "displaynone": props.isSaveChangesButtonClicked })}>Save Changes</button>

            <ButtonPreloader displayNone={!props.isSaveChangesButtonClicked} dotsCount={10} classes={["loader"]} />

        </form>
    );
}

export default (OwnerProfilePageForm);