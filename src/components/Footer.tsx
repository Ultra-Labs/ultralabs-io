import React, { FC } from "react";
import FooterStyle from "assets/styles/components/Footer.style";
import Icon from "components/elements/Icon/Icon";
import InputButton from "components/elements/InputButton/InputButton";
import { theme } from "constants/variables";
import { useServicePage } from "hooks/useServicePage";
import { useContactPage } from "hooks/useContactPage";
import { useAboutPage } from "hooks/useAboutPage";
import { Link } from "gatsby";
import { useLogo } from "hooks/useLogo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type FooterProps = {
  location?: string;
  phoneNumber?: string;
};

const Footer: FC<FooterProps> = () => {
  const { location, phoneNumber } = useContactPage();
  const { servicesList } = useServicePage();
  const { heroText } = useAboutPage();
  const { footerLogoImg } = useLogo();

  return (
    <FooterStyle>
      <div className="container">
        <div>
          <Link to="/" className="logo" title="Ultralabs Armenia">
            <GatsbyImage
              image={getImage(footerLogoImg)}
              alt="headerLogoImg"
              className="footer-logo"
              loading="lazy"
            />
          </Link>
          <nav className="main_menu">
            <ul className="menu_list">
              <li className="menu_item">
                <Link
                  activeClassName={"active-link"}
                  className="h3"
                  to="/contact-us/"
                  title="contact"
                >
                  Contact
                </Link>
                <ul className="submenu_list">
                  <li className="submenu_item">
                    {location && (
                      <p className="body2 connection">
                        <Icon
                          icon="location"
                          size={24}
                          color={`${theme.lightColor}`}
                        />
                        {location}
                      </p>
                    )}
                  </li>
                  <li className="submenu_item">
                    {phoneNumber && (
                      <a
                        href={`tel: ${phoneNumber}`}
                        className="body2 connection"
                        title={phoneNumber}
                      >
                        <Icon
                          icon="phone"
                          size={24}
                          color={`${theme.lightColor}`}
                        />
                        {phoneNumber}
                      </a>
                    )}
                  </li>
                </ul>
              </li>

              <li className="menu_item">
                <Link
                  activeClassName={"active-link"}
                  className="h3"
                  to="/our-services/"
                >
                  Our Services
                </Link>
                <ul className="submenu_list">
                  {servicesList.map(({ servicesText }, index) => (
                    <li key={index} className="submenu_item">
                      {servicesText}
                    </li>
                  ))}
                </ul>
              </li>

              <li className="menu_item">
                <Link
                  activeClassName={"active-link"}
                  className="h3"
                  to="/about-us/"
                >
                  About Us
                </Link>

                <ul className="submenu_list">
                  <li className="submenu_item">{heroText}</li>

                  <li className="submenu_item">
                    <h3 className="title h3">Subscribe to our newsletter</h3>
                    <InputButton formName="subscribe-form" />
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="copyright">
          <p>
            © {new Date().getFullYear()}. Ultra Labs Armenia. All rights
            reserved.
          </p>
          <div className="shared_block">
            <ul className="d-flex">
              <li>
                <a
                  href="https://www.facebook.com/ultra.armenia/"
                  target="_blank"
                  title="facebook"
                >
                  <Icon
                    icon="facebook2"
                    size={24}
                    color={`${theme.lightColor}`}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ultralabs-am/mycompany/"
                  target="_blank"
                  title="linkedin"
                >
                  <Icon
                    icon="linkedin2"
                    size={24}
                    color={`${theme.lightColor}`}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
