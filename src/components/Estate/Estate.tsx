import React from "react";
import Title from "../Title/Title";
import { estate } from "../../Data";
import EstateCard from "../EstateCard/EstateCard";
import Tabs from "../Tabs/Tabs";

const Estate = () => {
    const categories = ['Residential Property', 'Commercial Property', 'Agriculture Property', 'Industrial Property'];
  return (
    <section className="py-12 px-70">
      <Title
        mainTitle="Best Real Estate Deals"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />

      <div className=" mt-14 max-500:mt-11">
        <Tabs categories={categories} cardsData={estate} />
      </div>
    </section>
  );
};

export default Estate;
