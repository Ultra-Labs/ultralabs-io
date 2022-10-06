import { ImageDataLike } from "gatsby-plugin-image";

export type TCareersListData = {
  careersListTitile?: string;
  careersListDescription?: string;
};

export type TCareersList = {
  positionTitle?: string;
  positionText?: string;
  path?: string;
};

export type TPortfolioPageData = {
  data?: optionData;
};

export type optionData = {
  markdownRemark?: markdownData;
};

export type markdownData = {
  frontmatter?: frontmatterData;
  html?: string;
};

export type frontmatterData = {
  heroImg?: ImageDataLike;
  path?: string;
  positionTitle?: string;
  seoDescription?: string;
  seoTitle?: string;
  moreDetails?: [];
  contactImg?: ImageDataLike;
  middlewareText?: string;
  contactTitle?: string;
};

export type TCareersSectionData = {
  moreTitle?: string;
  moreListText?: [
    {
      moreText?: string;
    }
  ];
};
