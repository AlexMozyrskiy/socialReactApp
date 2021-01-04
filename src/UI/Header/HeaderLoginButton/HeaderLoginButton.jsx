import React from "react";
import cn from "classnames";

const HeaderLoginButton = (props) => {
    return (
        <>
            <button onClick={() => props.toogleIsModalLoginWindowAcive(true)} className={ cn("button", { 'displaynone': props.isModalLoginWindowAcive } ) }>
                Log In
            </button>
            <div className={cn('loader', 'loader_header-loginbutton', { 'displaynone': !props.isModalLoginWindowAcive })}>
                <div id="fountainG_1" className="fountainG"></div>
                <div id="fountainG_2" className="fountainG"></div>
                <div id="fountainG_3" className="fountainG"></div>
            </div>
        </>
    );
}

export default HeaderLoginButton;