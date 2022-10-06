import React, { FC } from "react";
import { getImage, ImageDataLike, GatsbyImage } from "gatsby-plugin-image";
import ContactUsStyle from "assets/styles/components/home/ContactUs.style";
import ContactForm from "components/ContactForm";

const ContactUs: FC<{
  contactImg?: ImageDataLike;
  dropdownIsVisible?: boolean;
  fileIsVisible?: boolean;
  positionTitle?: string;
  formName?: string;
  contactTitle?: string;
}> = ({
  contactImg,
  dropdownIsVisible,
  fileIsVisible,
  positionTitle,
  formName,
  contactTitle,
}) => {
  return (
    <ContactUsStyle>
      <GatsbyImage
        image={getImage(contactImg)}
        alt="img"
        className="w-100 h-100"
        loading="lazy"
      />

      <ContactForm
        dropdownIsVisible={dropdownIsVisible}
        formName={formName}
        positionTitle={positionTitle}
        fileIsVisible={fileIsVisible}
        contactTitle={contactTitle}
      />
    </ContactUsStyle>
  );
};

export default ContactUs;
