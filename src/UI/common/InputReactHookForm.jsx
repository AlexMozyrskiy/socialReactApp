import React from "react";
import cn from "classnames";

/* Пример применения компонента:
    <InputReactHookForm
        CSSclasses={["login__form-input"]}          // - массив с перечислением классов CSS
        register={props.register}
        name="lookingForAJobDescription"
        errors={props.errors.lookingForAJobDescription}
        minLength={3}
        required={true}
        placeholder={"Enter Your Job Description"}
        onChangeOwnFunction={props.deleteErrorMessage}
    />
*/

const InputReactHookForm = (props) => {
    return (
        <>
            <input
                className={cn({ "profile__item": !props.errors }, { "error__input": props.errors }, [...props.CSSclasses])}
                ref={props.register({ minLength: props.minLength, required: props.required })}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChangeOwnFunction}
            />

            {/* сообщения об ошибках */}
            { props.errors
                && props.errors.type === "minLength"
                && <p className="animate__animated animate__lightSpeedInRight error__message">
                    Min {props.minLength} Symbols
            </p> }
            { props.errors
                && props.errors.type === "required"
                && <p className="animate__animated animate__lightSpeedInRight error__message">
                    Required Field
            </p> }
            {/* / сообщения об ошибках */}
        </>
    );
}

export default InputReactHookForm;