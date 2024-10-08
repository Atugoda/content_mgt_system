// import React from 'react'
// import closeMenu from '../image/close-svgrepo-com.svg'

// const Header = () => (
//     <header className = "header_container">
//         {/* <h1>Content <span> Management </span><span>System</span></h1> */}
//         <h1>Content Management System</h1>

//         <nav>
//            <ul>
//             <div className= "header_menuClose" >
//                 <img src={ closeMenu} alt='close Menu'/>
//             </div>
//             <div className="header_menu">

//            <li> Home </li>
//            <li> About </li>
//            <li> Contact </li>
//            <li> Project </li>

//            </div>
//            </ul>
//         </nav>
//     </header>
// )

// export default Header

import React, { useState } from "react";
import closeMenu from "../image/close-svgrepo-com.svg";
import menu from "../image/menu-svgrepo-com.svg";

const Header = () => {
  //usestate starting value is to be given
  const [menuClick, setmenuClick] = useState(false);

  return (
    <header className="header_container">
      {/* <h1>Content <span> Management </span><span>System</span></h1> */}
      <h1>Content Management System</h1>

      <nav>
        <img
          src={menu}
          alt="menu"
          style={{
            width: "30px",
            cursor: "pointer",
          }}
          onClick={() => {
            setmenuClick(true);
          }}
        />
        <ul
          style={{
            right: `${menuClick ? "-20px" : "-4060px"}`,
          }}
        >
          <div className="header_menuClose">
            <img
              src={closeMenu}
              alt="close Menu"
              style={{
                width: "20px",
                height: "20px",
              }}
              onClick={() => {
                setmenuClick(false);
              }}
            />
          </div>
          <div className="header_menu" style={{ width: "-300px" }}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
          </div>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
