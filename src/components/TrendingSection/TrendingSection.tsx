import Title from "../Title/Title";
import TrendingCards from "../TrendingCards/TrendingCards";
import imgOne from "./../../../public/trendingOne.svg";
import imgTwo from "./../../../public/trendingTwo.svg";
import imgThree from "./../../../public/trendingThree.svg";
import imgFour from "./../../../public/trendingFour.svg";
import imgFive from "./../../../public/trendingFive.svg";
import imgSix from "./../../../public/trendingSix.svg";
import icon from "./../../../public/locationBlack.svg";
function TrendingSection() {
  const trendingCardsInfo = [
    {
      image: imgOne,
      price: 300000,
      title: "Luxury Apartment in California",
      icon: icon,
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      image: imgTwo,
      price: 300000,
      title: "Luxury Apartment in California",
      icon: icon,
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      image: imgThree,
      price: 300000,
      title: "Luxury Apartment in California",
      icon: icon,
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      image: imgFour,
      price: 300000,
      title: "Luxury Apartment in California",
      icon: icon,
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      image: imgFive,
      price: 300000,
      title: "Luxury Apartment in California",
      icon: icon,
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      image: imgSix,
      price: 300000,
      title: "Luxury Apartment in California",
      icon: icon,
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
  ];

  return (
    <section id="service" className="py-12 px-70">
      <Title
        mainTitle="Most Trending"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="flex justify-between items-center gap-11 mt-14 flex-wrap max-950:justify-center max-500:mt-11">
        {trendingCardsInfo.map((element, index) => {
          return (
            <TrendingCards
              key={index}
              image={element.image}
              price={element.price}
              title={element.title}
              icon={element.icon}
              location={element.location}
            />
          );
        })}
      </div>
    </section>
  );
}

export default TrendingSection;
