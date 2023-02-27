import React, {FC} from 'react';
import "./font/big_font.css"
interface BigFont {
    children?: React.ReactNode;
    className?: React.ReactNode;
    style?: React.ReactNode;
}
const BigFont:FC<BigFont> = ({children}) => {
    return (
        <div className={"big_text"}>
            {children}
        </div>
    );
};

export default BigFont;