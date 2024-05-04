import React from "react";
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as CheckSVG } from './check.svg';

const iconTypes = {
    "check": <CheckSVG className="Icon-svg"/>,
    "delete": <DeleteSVG className="Icon-svg"/>,
    
}
function TodoIcon({ type }){
    return(
        <span
            className={`Icon Icon-svg Icon-${type}`}
        >
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };