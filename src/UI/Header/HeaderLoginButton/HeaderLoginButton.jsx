import React from "react";
import cn from "classnames";

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
            <div className={cn('loader', 'loader_header-loginbutton', { 'displaynone': !props.isHeaderLoginButtonClicked })}>      { /* Если активно покажем прелоадер вместо кнопки */ }
                <div id="fountainG_1" className="fountainG"></div>
                <div id="fountainG_2" className="fountainG"></div>
                <div id="fountainG_3" className="fountainG"></div>
            </div>
        </>
    );
}

export default HeaderLoginButton;