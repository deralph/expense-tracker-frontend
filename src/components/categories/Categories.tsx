import React from "react";
import Incategories from "./Incategories";
import useIcons from "../../extras/useicon";
import Back from "../../extras/Back";

const Categories:React.FC = () => {
  const all = useIcons();
  return (
    <>
      <Back />
      <h3 className="category-h3">Categories</h3>
      <section className="category">
        {all.map((category) => {
          return <Incategories  title={category.title} Icon={category.Icon} color={category.color} key={category.title} />;
        })}
      </section>
    </>
  );
};

export default Categories;
