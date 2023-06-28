import React, { useEffect, useState } from "react";
import { Header, AllPosts } from "../components";
import Filter from "../components/Filter";
import LoadingPage from "../components/LoadingPage";

import { getAllPost, getCategories, getFilteredPosts } from "../services";

const posts = ({ allPosts, allCategories }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const filtered = allPosts.filter((post) =>
      categories.every((category) =>
        post.categories.some(
          (postCategory) => postCategory.name === category.name
        )
      )
    );
    setFilteredPosts(filtered);

    // Return a cleanup function to clear the filtered posts when the component unmounts
    return () => setFilteredPosts([]);
  }, [allPosts, categories]);

  return (
    <>
      {loading === false ? (
        <>
          <Header />
          <div className="container mx-auto mb-8">
            <div className="lg:divide-y-2 lg:divide-slate-700">
              <div>
                <h1 className="text-text text-6xl text-center pb-8">
                  Unsere Posts
                </h1>
                <p className="text-text text-xl text-center pb-4">
                  In diesem Bereich finden Sie die neuesten Artikel, die von uns
                  verfasst wurden. Wir laden Sie zum Lesen ein. Besuchen Sie
                  unsere Website jeden Tag und es wird sicherlich eine nützliche
                  und angenehme Zeit für Sie sein.
                </p>
              </div>
              <div className="pt-6 ">
                <div className="flex flex-row gap-x-4 justify-center">
                  {allCategories.map((category) => (
                    <Filter
                      allCategories={category}
                      key={category.name}
                      changeCategories={() =>
                        categories.includes(category)
                          ? setCategories(
                              categories.filter((cat) => cat !== category)
                            )
                          : setCategories((prevCategories) => [
                              ...prevCategories,
                              category,
                            ])
                      }
                    />
                  ))}
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-3 col-span-1 gap-x-20 px-4 pt-12">
                  {!categories.length > 0 ? (
                    <>
                      {allPosts.map((allPosts) => (
                        <AllPosts
                          allPosts={allPosts}
                          key={allPosts.title}
                          setLoading={() => setLoading(true)}
                          category={categories}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      {filteredPosts.map((filteredPosts, index) => (
                        <AllPosts
                          allPosts={filteredPosts}
                          key={filteredPosts.title}
                          setLoading={() => setLoading(true)}
                          category={categories}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-full">
          <LoadingPage />
        </div>
      )}
    </>
  );
};

export default posts;

export async function getStaticProps() {
  const data = await getAllPost();
  const cat = await getCategories();
  const fltrCategories = await getFilteredPosts(["Switzerland"]);
  return {
    props: {
      allPosts: data,
      allCategories: cat,
      filteredPosts: fltrCategories,
    },
  };
}
