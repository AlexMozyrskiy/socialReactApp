import React from "react";
import cn from "classnames";
import ButtonPreloader from "../../common/ButtonPreloader";

const HeaderLoginButton = (props) => {
    return (
        <>
            {
                props.isLoggedIn
                ? <button className={cn("button", { 'displaynone': props.isHeaderLoginButtonClicked })} onClick={ () => props.logOutButtonClicked() }>              {/* если залогинен покажем кнопку Log Out с соответствующим функционалом */} 
                    Log Out
                </button>
                :
                <button onClick={() => props.toogleIsModalLoginWindowAcive(true)} className={ cn("button", { 'displaynone': props.isHeaderLoginButtonClicked } ) }>        {/* если не залогинен покажем кнопку Log In с соответствующим функционалом */} 
                    Log In
                </button>
            }
            <ButtonPreloader displayNone={!props.isHeaderLoginButtonClicked} dotsCount={3} classes={["loader", "loader_header-loginbutton"]} />
        </>
    );
}

export default HeaderLoginButton;