import { ImageDataLike } from "gatsby-plugin-image";

export type TServiceData = {
  serviceTitle?: string;
  serviceDescription?: string;
  serviceList?: TServiceDataList[];
};

export type TServiceDataList = {
  serviceListTitle?: string;
  serviceListDescription?: string;
};

export type TValueData = {
  valueTitle?: string;
  valueDescription?: string;
  valuesList?: TValueDataList[];
};

export type TValueDataList = {
  valuesListImg?: ImageDataLike;
  valuesListTitle?: string;
  valuesListDescription?: string;
  valuesListLink?: string;
};

export type TWorkersData = {
  workersTitle?: string;
  workersDescription?: string;
  workersList?: TWorkersDataList[];
};

export type TWorkersDataList = {
  workersListImg?: ImageDataLike;
  workersListTitle?: string;
  workersListDescription?: string;
};

export type TAccompolishData = {
  accomplishedTitle?: string;
  accomplishedList?: TAccompolisDataList[];
};

export type TAccompolisDataList = {
  accomplishedListTitle?: string;
  numberCount?: number;
};
