import React, { useState } from "react";

function Nav() {
    var name = 'something'
    function selectedNav(name) {
        console.log(`${name} clicked`)
      }
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a onClick={() => selectedNav('about')}href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => selectedNav('portfolio')}href="#Portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => selectedNav('contact')}href="#Contact">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => selectedNav('resume')} href="#Resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Nav;