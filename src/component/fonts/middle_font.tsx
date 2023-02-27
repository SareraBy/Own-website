import React, {FC} from 'react';
import "./font/middle_font.css"

interface MiddleFont {
    children?: React.ReactNode;

}
const MiddleFont:FC<MiddleFont> = ({children}) => {
    return (
        <div  className={"middle_text"}>
            {children}
        </div>
    );
};

export default MiddleFont;