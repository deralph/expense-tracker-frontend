import React from "react";
import Incategories from "./Incategories";
import useIcons from "../../extras/useicon";
import Back from "../../extras/Back";

const Categories = () => {
  const all = useIcons();
  return (
    <>
      <Back />
      <h3 className="category-h3">Categories</h3>
      <section className="category">
        {all.map((category) => {
          return <Incategories {...category} key={category.title} />;
        })}
      </section>
    </>
  );
};

export default Categories;
