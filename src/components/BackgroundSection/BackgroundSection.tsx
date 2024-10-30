import Rectangle from "./../../../public/Rectangle.svg";
interface BackgroundSectionProps {
    image: string,
    title: string,
    desc: string
}
const BackgroundSection = ({image, title, desc} : BackgroundSectionProps) => {
  return (
    <section className={`bg-[url("./../../../public/Rectangle.svg")] px-70 flex flex-col justify-center items-center bg-cover py-12 relative`}>
        <div className="absolute bg-stone-950 inset-0 opacity-50"></div>
        <h3 className="text-70 text-white font-bold capitalize z-10 max-750:text-44 text-center">
            {title}
        </h3>

        <p className="text-3xl text-white max-w-[606px] text-center mt-58 z-10 max-750:text-2xl">
            {desc}
        </p>
    </section>
  )
}

export default BackgroundSection