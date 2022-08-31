import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

const AllPosts = ({ allPosts, setLoading, categories }) => {
  return (
    <div className="pb-12">
      <div>
        <div>
          <div>
            <div className="flex place-content-between">
              <div className="text-xs self-center ">
                {moment(allPosts.createdAt).format("MMM DD, YYYY")}
              </div>
              <div className="text-md">
                {allPosts.categories.map((category, index) => {
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
                src={allPosts.contentfoto.url}
                alt={allPosts.title}
                className="object-top w-full h-52 lg:h-64 md:h-64 object-cover py-4"
                loading="lazy"
              />
            }
            <div className="text-2xl mb-2">{allPosts.title}</div>
          </div>
        </div>
        <div className="line_clamp">{allPosts.teaser}</div>
        <div className="flex place-content-between mt-4">
          <div className="cursor-pointer pt-2 text-2xs ">
            <Link href={`/post/${allPosts.slug}`} key={allPosts.title}>
              <p
                className="border-b-2 hover:border-landingbg hover:text-landingbg inline-block"
                onClick={() => setLoading(true)}
              >
                Mehr lesen
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
