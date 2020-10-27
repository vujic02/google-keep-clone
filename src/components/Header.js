import React from 'react';
import Logo from './Logo';
import GithubIcon from './icons/GithubIcon';

const Header = ({pageTitle}) => {
    return (
        <div className="Header">
            <a href="http://github.com/vujic02"><GithubIcon/></a>
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
