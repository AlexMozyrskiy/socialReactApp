import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HeaderUserSearchForm from "./HeaderUserSearchForm";
import { notOwnerUserProfileThunkCreator } from "../../../BLL/notOwnerUserData/thunkCreators";
import { connect } from "react-redux";

const HeaderUserSearchFormContainer = (props) => {
    const { register, handleSubmit, errors } = useForm();

    // const headerSearchFormValue = null;

    const onSubmit = (formData) => {        // в formData все данные из заполненой формы
        // действия с заполненными данными, например санки
        console.log(formData.id);
        window.history.pushState(null, null, "/profile/" + formData.id);
        props.notOwnerUserProfileThunkCreator(formData.id);
    }

    function isIntegerValidation(fieldValue) {
        fieldValue = Number(fieldValue);        // преобразуем в число, если пришла строка типа "aSD" без цифр вернет NaN
        if(Number.isInteger(fieldValue)) {      // если целое число валидицию пройдет
            return true;
        } else {
            return false;
        }
    }

    return <HeaderUserSearchForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors.id}
        onSubmit={onSubmit}
        isIntegerValidation={isIntegerValidation}
    />
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    notOwnerUserProfileThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserSearchFormContainer);