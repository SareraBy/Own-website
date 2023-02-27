import React, {FC} from 'react';
import "./font/small_font.css"

interface SmallFont {
    children?: React.ReactNode;
    className?: React.ReactNode;
    style?: React.ReactNode;

}
const SmallFont:FC<SmallFont> = ({children}) => {
    return (
        <div className={"small_text"}>
            {children}
        </div>
    );
};

export default SmallFont;