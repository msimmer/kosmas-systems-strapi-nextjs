import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "./Image";
import { IFile, IImages } from "k-component";

interface PageProps {
  title?: string;
  content?: string;
  gallery?: IImages;
  downloads?: IFile[];
}

const fileName = (url: string) => url.slice(url.lastIndexOf("/") + 1);

const Page = ({ title, content, gallery, downloads }: PageProps) => (
  <div className="uk-container k-margin-mega-top">
    <div className="uk-grid uk-grid-medium uk-margin-small-top">
      {title && (
        <div>
          <h2 className="uk-margin-medium-bottom">{title}</h2>
        </div>
      )}

      {content && (
        <div className="uk-grid uk-grid-medium">
          <div className="uk-width-3-5 k-text-body">
            <ReactMarkdown source={content} />
          </div>
        </div>
      )}

      {gallery && (
        <>
          {gallery.map((image) => (
            <Image key={image.id} src={image.url} alt={image.alternativeText} />
          ))}
        </>
      )}

      {downloads && (
        <div className="uk-margin-medium-top k-text-body">
          <p className="uk-margin-remove-bottom">Downloads</p>
          {downloads.map((download) => (
            <div key={download.id}>
              <a href={download.url} download={true}>
                {fileName(download.url)}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Page;
