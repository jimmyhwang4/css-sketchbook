import React from 'react';

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerBig">
                <p>『 CSS Sketchbook 』</p>
            </div>
            <div className="headerSmall">
                <p><a target="_blank" href="https://jimmyhwang.me">Jimmy Hwang</a> ⇋ <a target="_blank" href="https://github.com/jimmyhwang4/css-sketchbook">Github</a></p>
            </div>
        </div>
    );
}

export default Header;