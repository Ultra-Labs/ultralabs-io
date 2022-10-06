import { ImageDataLike } from "gatsby-plugin-image";

export type TProcessListData = {
  processImg?: ImageDataLike;
  processText?: string;
  processTitle?: string;
};

export type TServiceListData = {
  title?: string;
  servicesImg?: ImageDataLike;
  servicesText?: string;
  servicesTitle?: string;
  servicesListDescription?: string;
};
