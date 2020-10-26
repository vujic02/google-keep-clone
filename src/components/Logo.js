import React from 'react';

import KeepLogo from './img/keep-logo.png';
import ReactLogo from './img/reactjs-logo.svg';
import FirebaseLogo from './img/firebase-logo.png';


const Logo = (logoLetter) => {
    let text,name;

    if(logoLetter === "r") {
        name = ReactLogo;
        text = 'React.js Logo';
    }
    else if (logoLetter === "k") {
        name = KeepLogo;
        text = "Google Keep Logo";
    }
    else if (logoLetter === "f") {
        name = FirebaseLogo;
        text = "Firebase Logo";
    }


    return (
        <div className="logo">
            <img src={name} alt={text}/>
        </div>
    )
}

export default Logo
