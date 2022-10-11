import { ImageDataLike } from 'gatsby-plugin-image';

export type TFilterDataItem<T> = {
  url: string;
  data?: T;
};

export type TPortfolioData = {
  portfolioTitle?: string;
  portfolioListImg?: ImageDataLike;
  portfolioListLargeImg?: ImageDataLike;
  portfolioListSmallImg?: ImageDataLike;
  portfolioListExtraSmallImg?: ImageDataLike;
  portfolioTextLess?: string;
  portfolioTextMore?: string;
  portfolioTextFliped?: string;
  path?: string;
  url: string;
};

export type TPortfolioHomeData = {
  portfolioTitle: string;
  portfolioImg: ImageDataLike;
  portfolioTextMore: string;
  portfolioTextFliped?: string;
  path?: string;
  url: string;
};

export type TPortfolioPageData = {
  data?: optionData;
};

export type optionData = {
  markdownRemark?: markdownData;
};

export type markdownData = {
  frontmatter?: frontmatterData;
};

export type frontmatterData = {
  seoDescription?: string;
  seoTitle?: string;
  heroTitle?: string;
  heroText?: string;
  heroImg?: ImageDataLike;
  heroLargeImg?: ImageDataLike;
  heroSmallImg?: ImageDataLike;
  heroExtraSmallImg?: ImageDataLike;
  type?: string;
  service?: string;
  client?: string;
  aboutProgram?: string;
  portfolioDescription?: string;
  portfolioSection?: TPortfolioSectionData[];
};

export type TPortfolioSectionData = {
  portfolioSectionImg?: ImageDataLike;
  portfolioSectionTitle?: string;
  portfolioSectionText?: string;
  className?: string;
};

export type TPortfolioFilterItem = TFilterDataItem<TPortfolioData>;
