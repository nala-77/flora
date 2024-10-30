interface trendingCardsProps {
  image: string;
  price: number;
  title: string;
  icon: string;
  location: string;
}
function TrendingCards({
  image,
  price,
  title,
  icon,
  location,
}: trendingCardsProps) {
  return (
    <div className="shadow-3xl p-5 rounded-10 2xl:w-2.6 ">
      <div>
        <img src={image} alt="apartment" className="rounded-md w-full" />
      </div>

      <p className="text-main-color mt-4 font-semibold text-lg">${price}</p>

      <h3 className="max-w-[180px] font-semibold text-lg mb-38">{title}</h3>

      <div className="flex items-center gap-2.5">
        <img src={icon} alt="location" />
        <p className="font-normal text-sm text-[#222222]">{location}</p>
      </div>
    </div>
  );
}

export default TrendingCards;
