import Image from "next/image";
import AnimatedWordsGroup from "./AnimatedWordsGroup";

const PageTitle = ({ titleHighlight, title, keywords, description }) => {
  return (
    <div className="relative container my-[20px] t:my-[30px] sd:my-[40px]">
      <div className="max-w-[1344px] mx-auto">
        <Image
          src="/page-title-bg.svg"
          alt="Page Title"
          width={1345}
          height={375}
          className="hidden sd:block"
        />
        <Image
          src="/page-title-bg-md.svg"
          alt="Page Title"
          width={708}
          height={230}
          className="hidden t:block sd:hidden"
        />
        <Image
          src="/page-title-bg-sm.svg"
          alt="Page Title"
          width={330}
          height={200}
          className="t:hidden"
        />
        <div className="absolute top-1/2 t:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-[20px] sd:py-[50px] mx-auto text-center ">
          <p className="inline-block text-center bg-white text-primary font-semibold uppercase text-[9px] t:text-[10px] sd:text-[12px] mb-[5px] tracking-[4px] sd:tracking-[7px] rounded-[3px] px-[7px] py-[3px]">
            {titleHighlight}
          </p>
          <h1
            style={{ textWrap: "balance" }}
            className={`max-w-[800px] md:max-w-[1000px] ld:max-w-[1110px] text-[24px] t:text-[36px] sd:text-[58px] tracking-tight mx-auto text-center font-bold`}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-[5px] t:mt-[10px] sd:mt-[15px] m-auto text-center t:max-w-[600px] sd:max-w-[650px] text-grey-71 text-[12px] t:text-[16px] sd:text-[20px]">
              {description}
            </p>
          )}
          <div className="flex justify-center">
            {keywords && (
              <AnimatedWordsGroup
                words={keywords}
                id="page-title-animated-words"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
