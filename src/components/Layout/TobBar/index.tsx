import React, { useState } from "react";
import "./TobBar.scss";
import logo from "../../../assets/logo.png";
import miniLogo from "../../../assets/miniLogo.png";
import InputField from "../../FormItems/InputField";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import profileImg from "../../../assets/profileImg.png";
import { FaCaretDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar__left">
        <div>
          {isMenuOpen ? (
            <RiCloseLargeLine className="topbar__menuIcon" onClick={() => setIsMenuOpen(false)} />
          ) : (
            <RxHamburgerMenu className="topbar__menuIcon" onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
        <img src={logo} alt="Lendsqr Logo" className="topbar__left__logo" />
        <img
          src={miniLogo}
          alt="Lendsqr Logo"
          className="topbar__left__mini-logo"
        />
      </div>
      <div className="topbar__search">
        <InputField
          type="search"
          name="search"
          //   value={form.email}
          //   onChange={handleChange}
          //   error={errors.email}

          placeholder="Search for anything"
          inputClassName="topbar__search-input"
        />
        <span className="topbar__search-icon">
          <IoIosSearch />
        </span>
      </div>
      <div className="topbar__right">
        <p className="topbar__right__text">Docs</p>
        <IoNotificationsOutline className="icon" />

        <div className="user">
          <img src={profileImg} alt="Adedeji" />
          <span className="user__name">
            Adedeji <FaCaretDown className="icon" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
