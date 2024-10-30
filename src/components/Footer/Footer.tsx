interface footerProps {
  logo: string;
  desc: string;
  dataOne: dataProps[];
  dataTwo: dataProps[];
  dataThree: dataThreeProps[];
}
interface dataProps {
  title: string;
  list: links[];
}
interface dataThreeProps {
  title: string;
  location: string;
  data: forDataThreeImg[];
}
interface links {
  link: string;
  to: string;
}
interface forDataThreeImg {
  image: string;
  to: string;
}
function Footer({ logo, desc, dataOne, dataTwo, dataThree }: footerProps) {
  return (
    <footer id="contact">
      <div className="flex px-70 justify-between flex-wrap max-500:flex-col  max-500:gap-8 gap-2 pb-9 border-b-2 border-[#2222221A] border-solid">
        <div className="flex flex-col w-[350px]  max-500:w-full">
          <div>
            {" "}
            <img src={logo} alt="logo" />
          </div>
          <p className="text-[#22222280] mt-6">{desc}</p>
        </div>

        {dataOne.map((element, index) => {
          return (
            <div key={index}>
              <h3 className="mb-5 font-bold text-xl">{element.title}</h3>
              <ul className="flex flex-col gap-4  max-500:gap-3">
                {element.list.map((e, i) => {
                  return (
                    <li key={i} className="hover:underline cursor-pointer">
                      <a href={`#${e.to}`}>{e.link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {dataTwo.map((element, index) => {
          return (
            <div key={index}>
              <h3 className="mb-5 font-bold text-xl">{element.title}</h3>
              <ul className="flex flex-col gap-4  max-500:gap-3">
                {element.list.map((e, i) => {
                  return (
                    <li key={i} className="hover:underline cursor-pointer">
                      <a href={`#${e.to}`}>{e.link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {dataThree.map((element, index) => {
          return (
            <div key={index}>
              <h3 className="mb-5 font-bold text-xl">{element.title}</h3>
              <p className="text-[#222222]">{element.location}</p>
              <div className="flex gap-4 mt-4">
                {element.data.map((e, i) => {
                  return (
                    <a
                      href={`#${e.to}`}
                      key={i}
                      className="w-12 h-12   max-500:w-10   max-500:h-10 bg-main-color flex justify-center items-center rounded-full hover:bg-black transition-all duration-500 cursor-pointer"
                    >
                      <img
                        src={e.image}
                        alt="img"
                        className="w-6 h-6   max-500:w-4   max-500:h-4 object-contain"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-70 flex justify-between max-721:flex-col max-721:justify-center max-721:items-center max-721:gap-4 py-6">
        <p>
        Copyright 2024 flora. All Rights Reserved
        </p>

        <ul className="flex gap-8">
          <li>
          <a className="hover:underline cursor-pointer" href="#">Terms & Conditions</a>
          </li>
          <li>
          <a className="hover:underline cursor-pointer" href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
