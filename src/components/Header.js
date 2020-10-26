import React from 'react';
import Logo from './Logo';

const Header = ({pageTitle}) => {
    return (
        <div className="Header">
            <h1 className="header-text">
                {pageTitle}
            </h1>
            <div className="logos">
                <span className="logo keep">
                    {Logo("k")}
                </span>
                <span className="plus">+</span>
                <span className="logo react">
                    {Logo("r")}
                </span>
                <span className="plus">+</span>
                <span className="logo firebase">
                    {Logo("f")}
                </span>
            </div>
        </div>
    )
}

export default Header
