import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import newPost from "../pages/newestPage";

const Recentposts = ({ recentPosts }) => {
  return (
    <div>
      <div className="pb-12">
        <div>
          <div className="flex-col">
            <div className="text-xs mb">
              {moment(recentPosts.createdAt).format("MMM DD, YYYY")}
              {newPost.id}
            </div>
            {
              <img
                src={recentPosts.contentfoto.url}
                alt={recentPosts.title}
                className="object-top w-80 lg:h-42 md:h-42 object-cover py-4 h-44 "
                loading="lazy"
              />
            }

            {recentPosts.categories.map((category) => {
              <div className="text-lg">{category.name}</div>;
            })}

            <div className="text-2xl mb-2">{recentPosts.title}</div>
          </div>
        </div>
        <p className="line_clamp">{recentPosts.teaser}</p>

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
