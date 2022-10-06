import { ImageDataLike } from "gatsby-plugin-image";

export type THomeHero = {
  heroTitle?: string;
  heroText?: string;
  className?: string;
  mainURL?: string;
  mainURLTitle?: string;
  heroImg?: ImageDataLike;
};

export type THomeAboutData = {
  aboutTitle?: string;
  aboutText?: string;
  aboutImg?: ImageDataLike;
};

export type THomeServiceData = {
  serviceTitle?: string;
  serviceText?: string;
  serviceImg?: ImageDataLike;
  serviceList?: THomeServiceList[];
};

export type THomeServiceList = {
  serviceListTitle?: string;
  serviceListText?: string;
};

export type THomePeopleData = {
  ourQuote?: string;
  ourText?: string;
  ourTitle?: string;
  ourImg?: ImageDataLike;
  ourLargeImg?: ImageDataLike;
  ourSmallImg?: ImageDataLike;
  ourExtraSmallImg?: ImageDataLike;
  linkTitle?: string;
  className?: string;
  mainURL?: string;
};

export type THomePortfolioData = {
  portfolioBlockTitle?: string;
  portfolioBlockText?: string;
};
