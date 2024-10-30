import { ReactNode } from 'react';
import '../../App.css'
interface cardProps {
  image: ReactNode;
  title: string;
  desc: string;
}
function Card({ image, title, desc }: cardProps) {
  return (
    <div className="group/card card flex flex-col justify-center px-10 pt-30 pb-20 w-90 hover:bg-main-color rounded-2xl transition-all duration-200">
      <div>
        {image}
      </div>

      <h3 className='mt-5 mb-2.5 text-22 font-semibold group-hover/card:text-white'>{title}</h3>
      <p className='text-[#22222280] text-13 group-hover/card:text-white '>{desc}</p>
    </div>
  );
}

export default Card;
