interface headerDetails {
  image: string;
  title: string;
  info: string;
}
interface headerProps {
  title: string;
  image: string;
  desc: string;
  details: headerDetails[];
}
function Header({ title, image, desc, details }: headerProps) {
  return (
    <header id="home" className="bg-main-bg px-70 h-screen max-500:px-0">
      <h2 className="max-w-[549px] font-bold text-6xl pt-122 leading-80 max-500:px-70 max-500:text-4xl max-500:leading-none max-500:pt-32">
        {title}
      </h2>

      <p className="max-w-[423px] text-[#22222280] mt-5 mb-13 max-500:px-70">
        {desc}
      </p>

      <div className="relative z-10 flex justify-between max-w-[868px] py-5 px-16 backdrop-blur-lg bg-white bg-opacity-30 opacity-80 rounded-2xl flex-wrap max-950:gap-y-3.5">
        {details.map((element, index) => {
          return (
            <div key={index} className="flex gap-3.5  ">
              <div className="flex justify-center items-center w-60 h-60 bg-main-bg rounded-full">
                <img src={element.image} alt="details image" />
              </div>
              <div>
                <h4 className="font-medium capitalize">{element.title}</h4>

                <p className="text-[#222222] font-normal">{element.info}</p>
              </div>
            </div>
          );
        })}
      </div>
      <img
        className="absolute right-0 bottom-0 w-8/12 max-500:w-full"
        src={image}
        alt="header-img"
      />
    </header>
  );
}

export default Header;
// flex-wrap
