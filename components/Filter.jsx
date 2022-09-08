import React, { useEffect, useState } from "react";

const Filter = ({ allCategories, changeCategories }) => {
  const [active, setActive] = useState();
  const [activeCategories, setActiveCategories] = useState([]);
  useEffect(() => {
    setActive(false);
    setActiveCategories(allCategories);
  }, []);

  function Click() {
    if (active === false) {
      setActive(true);
      setActiveCategories(allCategories.name);
      changeCategories(allCategories.name);
    } else {
      setActive(false);
      setActiveCategories(!allCategories.name);
      changeCategories(!allCategories.name);
    }
  }

  return (
    <div>
      {active === true ? (
        <button
          className="border p-2 text-sm rounded-md bg-landingbg border-background text-background"
          onClick={() => Click()}
        >
          {allCategories.name}
        </button>
      ) : (
        <button
          className="border p-2 text-sm bg-background rounded-md "
          onClick={() => Click()}
        >
          {allCategories.name}
        </button>
      )}
    </div>
  );
};

export default Filter;
