import * as React from "react";
import { Link } from "gatsby";
import HeaderStyle from "assets/styles/components/Header.style";
import Icon from "./elements/Icon/Icon";
import { mesnuList } from "../constants/path";
import { theme } from "constants/variables";
import { useLogo } from "hooks/useLogo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Header: React.FC = () => {
  const [openedDropdown, setOpenedDropdown] = React.useState(false);

  const handleDropdownToggle = () => {
    setOpenedDropdown(!openedDropdown);
  };

  const { headerLogoImg } = useLogo();
  return (
    <HeaderStyle>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center">
          <Link to="/" className="logo" title="Ultralabs Armenia">
            <GatsbyImage
              image={getImage(headerLogoImg)}
              alt="Ultralabs Armenia"
              loading="lazy"
            />
          </Link>
          <button
            className="show-mobile"
            onClick={handleDropdownToggle}
            title="button"
          >
            <Icon
              color={theme.lightColor}
              size={24}
              icon={`${openedDropdown ? "close" : "menu"}`}
            />
          </button>

          <nav
            className={`main-menu ml-auto ${openedDropdown ? "opened" : ""}`}
          >
            <ul className="menu">
              {mesnuList.map((item) => (
                <li key={item.name}>
                  <Link
                    activeClassName={"active-link"}
                    to={`/${item.value}/`}
                    partiallyActive={true}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
