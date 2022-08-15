import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import newPost from "../pages/newestPage";

const Recentposts = ({ recentPosts, newPost }) => {
  return (
    <div>
      <div className="pb-12">
        <div>
          <div className="flex-col w-80">
            <div className="flex place-content-between">
              <div className="text-xs self-center ">
                {moment(recentPosts.createdAt).format("MMM DD, YYYY")}
              </div>
              <div className="text-md inline-block">
                {recentPosts.categories.map((category, index) => {
                  return (
                    <p className="self-center inline-block text-sm mx-2 border-b border-landingbg text-landingbg">
                      {category.name}
                    </p>
                  );
                })}
              </div>
            </div>
            {
              <img
                src={recentPosts.contentfoto.url}
                alt={recentPosts.title}
                className="object-top w-80 lg:h-42 md:h-42 object-cover py-4 h-44 "
                loading="lazy"
              />
            }
            <div className="flex place-content-between">
              <div className="text-2xl mb-2">{recentPosts.title}</div>
              {console.log(recentPosts.title)}
            </div>
          </div>
        </div>
        <p className="line_clamp w-80">{recentPosts.teaser}</p>
        <div className="cursor-pointer pt-2 text-2xs ">
          <Link href={`/post/${recentPosts.slug}`} key={recentPosts.title}>
            <p className="border-b-2 hover:border-black inline-block">
              Mehr lesen
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recentposts;
