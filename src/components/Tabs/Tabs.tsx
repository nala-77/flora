import React, { useState } from 'react';
import EstateCard from '../EstateCard/EstateCard';

interface TabProps {
  categories: string[];
  cardsData: { image: string; category: string; item: string; detail: string }[];
}

const Tabs: React.FC<TabProps> = ({ categories, cardsData }) => {
  const [activeTab, setActiveTab] = useState<string>(categories[0]);

  // Filter cards based on the selected tab
  const filteredCards = cardsData.filter(card => card.item === activeTab);

  return (
    <>
      <div className="text-lg text-[#222222] mb-10 gap-12 flex flex-wrap max-750:gap-4">
        {categories.map((category, i) => (
          <button
            key={i}
            className={`tab ${activeTab === category ? 'text-main-color border-b-2 border-solid border-main-color' : ''} max-500:text-sm capitalize`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 max-950:justify-center justify-between items-center gap-11 ">
        {filteredCards.map(card => (
          <EstateCard image={card.image} item={card.item} category={card.category} detail={card.detail} />
        ))}
      </div>
    </>
  );
};

export default Tabs;
