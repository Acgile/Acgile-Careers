import SectionCaption from "./SectionCaption";

const SectionTitle = ({
  caption,
  captionBg = "#F2FAFD",
  title,
  description,
  titleClasses = "",
  descriptionClasses = "",
}) => {
  return (
    <>
      <SectionCaption content={caption} background={captionBg} />
      <h2
        className={`text-pretty text-center font-bold text-secondary tracking-[-1px] sd:tracking-[-2px] mb-[8px] sd:mb-[15px] text-[24px] t:text-[36px] sd:text-[58px] leading-[30px] t:leading-[44px] sd:leading-[64px] mx-auto ${titleClasses}`}
      >
        {title[0]}{" "}
        {title[1] && <span className="text-primary">{title[1]}</span>}{" "}
        {title[2]}
      </h2>
      <p
        className={`text-pretty text-grey-71 text-[12px] t:text-[14px] sd:text-[18px] leading-[18px] t:leading-[23px] sd:leading-[27px] tracking-[-0.05px] text-center mx-auto ${descriptionClasses}`}
      >
        {description}
      </p>
    </>
  );
};

export default SectionTitle;
