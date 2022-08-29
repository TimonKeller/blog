import React, { useEffect, useState } from "react";
import moment from "moment";
import Map from "./Map";
import { privateDecrypt } from "crypto";

const Newestpost = ({ newPost }) => {
  const [carousel, setCarousel] = useState();

  useEffect(() => {
    if (newPost.carouselpic) {
      setCarousel(true);
    }
  }, []);
  {
    console.log(carousel);
  }

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-two":
        return (
          <h2 key={index} className="text-4xl mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-2xl mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="p-0 pb-12 mb-2">
      <div className="mb-6 px-10">
        {moment(newPost.createdAt).format("MMM DD, YYYY")}
      </div>
      <div className="md:flex mb-4 place-content-between ">
        <div className="text-5xl mb-2 pl-10">{newPost.title}</div>
        <div className="pl-10 flex gap-x-2 items-center self-center">
          <img
            src={newPost.author.foto.url}
            alt={newPost.author.name}
            className="object-top max-h-8 object-cover rounded-full"
            loading="lazy"
          />
          <div>
            <p className="md:text-xl text-xl text-text">
              {newPost.author.name}
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pb-80 mb-8">
        <img
          src={newPost.contentfoto.url}
          alt={newPost.title}
          className="object-top absolute h-80 w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="px-10">
        <span className="text-lg text-text font-normal">
          {newPost.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </span>
      </div>
      {carousel && (
        <div className="grid grid-cols-2 col-span-1 gap-2 px-4 pt-12">
          {newPost.carouselpic?.map((pic, index) => {
            return (
              <img
                src={newPost.carouselpic[index].url}
                alt={newPost.carouselpic[index].url}
                className="object-top h-80 w-full object-cover"
                loading="lazy"
              />
            );
          })}
        </div>
      )}
      {console.log(newPost.carouselpic)}
      <div id="map" className="container" />
      <Map
        longitude={newPost.location.longitude}
        latitude={newPost.location.latitude}
      ></Map>
      {console.log(newPost.location.longitude)}
    </div>
  );
};

export default Newestpost;
