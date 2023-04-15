import React from "react";
import Incategories from "./Incategories";
import useIcons from "../../extras/useicon";
import Back from "../../extras/Back";

const Categories:React.FC = () => {
  const all = useIcons();
  return (
    <>
      <Back />
      <h3 className="category text-3xl big:text-6xl font-bold font-sans text-center mt-10 relative">Categories</h3>
      <section className="my-[70px] w-3/5 mx-auto lg:w-[90vw] flex justify-evenly sm:w-full flex-wrap">
        {all.map((category) => {
          return <Incategories  title={category.title} Icon={category.Icon} color={category.color} key={category.title} />;
        })}
      </section>
    </>
  );
};

export default Categories;
