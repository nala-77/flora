function Title({
  mainTitle,
  subTitle,
}: {
  mainTitle: string;
  subTitle: string;
}) {
  return (
    <div>
      <h4 className="text-39 font-bold capitalize max-500:text-29">{mainTitle}</h4>

      <p className="text-15 m-t-1.5 text-[#22222280] font-normal max-500:text-xs">{subTitle}</p>
    </div>
  );
}

export default Title;
