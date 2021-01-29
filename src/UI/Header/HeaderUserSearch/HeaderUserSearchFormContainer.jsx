import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import HeaderUserSearchForm from "./HeaderUserSearchForm";
import { notOwnerUserProfileThunkCreator } from "../../../BLL/notOwnerUserData/thunkCreators";
import { getIsSearchButtonClickedSelector } from "../../../BLL/header/selectors";
import { connect } from "react-redux";

const HeaderUserSearchFormContainer = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();                           // добавляет новый УРЛ и компонент перересовывается правильно

    const onSubmit = (formData) => {        // в formData все данные из заполненой формы
        formData.id = Number(formData.id)
        // действия с заполненными данными, например санки
        // console.log(formData.id);
        history.push("/profile/" + formData.id);              // добавляет новый УРЛ и компонент перересовывается правильно, роутер автоматом перекидывает на страницк найденного пользователя
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
        isSearchButtonClicked={props.isSearchButtonClicked}
    />
}


const mapStateToProps = (state) => {
    return {
        isSearchButtonClicked: getIsSearchButtonClickedSelector(state)
    }
}

const mapDispatchToProps = {
    notOwnerUserProfileThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserSearchFormContainer);