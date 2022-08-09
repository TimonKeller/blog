import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

const AllPosts = ({ allPosts, setLoading }) => {
  return (
    <div className="pb-12">
      <div>
        <div>
          <div>
            <div className="text-xs mb">
              {moment(allPosts.createdAt).format("MMM DD, YYYY")}
            </div>
            {
              <img
                src={allPosts.contentfoto.url}
                alt={allPosts.title}
                className="object-top w-full h-52 lg:h-64 md:h-64 object-cover py-4"
                loading="lazy"
              />
            }
            <div className="flex">
              <div className="text-2xl mb-2">{allPosts.title}</div>
              <div className="inline-block self-center text-sm mb-1 ml-4 p-1 rounded-md bg-landingbg text-background">
                {allPosts.categories[0].name}

                {console.log(allPosts.categories)}
              </div>
            </div>
          </div>
        </div>
        <div className="line_clamp">{allPosts.teaser}</div>
        <div className="cursor-pointer pt-2 text-2xs ">
          <Link href={`/post/${allPosts.slug}`} key={allPosts.title}>
            <p
              className="border-b-2 hover:border-black inline-block"
              onClick={() => setLoading(true)}
            >
              Mehr lesen
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
