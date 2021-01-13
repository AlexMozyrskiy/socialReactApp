import React from "react";
import cn from "classnames";

/* props - объект:
props = {
    displayNone: true,    // boolean - показывать ли прелоадер
    dotsCount: 10         // integer - количество точек в анимации
    classes: ["loader", "loader_loginWindow-loginbutton"]    // array - список css классов, кроме класса displaynone
}
*/

const ButtonPreloader = (props) => {
    
    let preloaderDots = [];
    for (let i = 1; i <= props.dotsCount; i++) {
        preloaderDots.push(<div id={"fountainG_" + i} className="fountainG" key={i}></div>);
    }

    return (
        <div className={cn(...props.classes, { "displaynone": props.displayNone })}>
            { preloaderDots }
        </div>
    );
}

export default ButtonPreloader;