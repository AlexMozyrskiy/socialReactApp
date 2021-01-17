import React from "react";
import { useState } from "react"
import HeaderUserSearchForm from "./HeaderUserSearchForm";
import { notOwnerUserProfileThunkCreator } from "../../../BLL/notOwnerUserData/thunkCreators";
import { connect } from "react-redux";

const HeaderUserSearchFormContainer = (props) => {
    let [headerSearchFormValue, changeheaderSearchFormValue] = useState("");

    function goToUserPage(id) {
        props.notOwnerUserProfileThunkCreator(id);
    }

    function keyBoardKeyUp(key, id) {            // при нажатии в поле поиска в хедере определим если нажат enter запустим функцию с санками
        if(key == 'Enter') {
            window.history.pushState(null, null, "/profile/" + id);  // добавим в адресную строку адрес
            goToUserPage(id);
        }
    }

    return <HeaderUserSearchForm
        headerSearchFormValue={headerSearchFormValue}
        changeheaderSearchFormValue={changeheaderSearchFormValue}
        goToUserPage={goToUserPage}
        keyBoardKeyUp={keyBoardKeyUp}
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