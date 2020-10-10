declare module "k-component" {
  export interface IFile {
    id: number;
    url: string;
  }

  export interface IImage extends IFile {
    alternativeText: string;
  }

  export type IImages = IImage[];

  export interface IComic {
    id: number;
    title: string;
    slug: string;
    gallery: IImages;
  }

  export type IComics = IComic[];

  export enum ICurrency {
    EUR = "eur",
    GPB = "gbp",
    USD = "usd",
  }

  export interface IPriceProps {
    currency: ICurrency;
    amount: number;
    className?: string;
  }

  export interface IArticle {
    id: number;
    title: string;
    image: IImage;
    media: IImages; // TODO add `IMedia` type
    source_name: string;
    source_url: string;
    published_at: Date;
  }

  export type IArticles = IArticle[];

  export interface ISculpture {
    id: number;
    title: string;
    slug: string;
    content: string;
    image: IImage;
    gallery: IImages;
  }

  export type ISculptures = ISculpture[];

  export interface IPage {
    id: number;
    title: string;
    content: string;
    gallery: IImages;
    downloads: IFile[];
  }

  export type IPages = IPage[];

  export interface IWork {
    id: number;
    title: string;
    gallery: IImages;
  }

  export type IWorks = IWork[];

  export interface IProduct {
    id: number;
    title: string;
    slug: string;
    content: string;
    price: number;
    currency: ICurrency;
    color: string;
    quantity: number;
    image: IImage;
    gallery: IImages;
    shopifyScript: string;
    shopifyElementId: string;
  }

  export type IProducts = IProduct[];

  interface IBundle {
    id: number;
    markdown: string;
  }

  export interface IMarquee {
    bundle: IBundle[];
  }
}
