import React, { useRef, useEffect, useState } from "react";

const Filter = ({ allCategories }) => {
  const ref = useRef(null);
  const [active, setActive] = useState();
  useEffect(() => {
    setActive(false);
  }, []);

  return (
    <div>
      {active === true ? (
        <button
          className=" p-2 text-sm rounded-md bg-landingbg border-background text-background"
          onClick={() => setActive(false)}
        >
          {allCategories.name}
        </button>
      ) : (
        <button
          className="border p-2 text-sm bg-background rounded-md "
          onClick={() => setActive(true)}
        >
          {allCategories.name}
        </button>
      )}
      {console.log(active)}
    </div>
  );
};

export default Filter;
