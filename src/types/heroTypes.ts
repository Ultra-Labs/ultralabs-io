import { ImageDataLike } from "gatsby-plugin-image";
import { WindowLocation } from "@reach/router";

export type THeroData = {
  heroTitle?: string;
  heroText?: string;
  heroImg?: ImageDataLike;
  className?: string;
  contactImg?: ImageDataLike;
  mainURL?: string;
  mainURLTitle?: string;
  location?: WindowLocation<object>;
};
