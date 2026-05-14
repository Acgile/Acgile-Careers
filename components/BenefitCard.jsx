import Image from "next/image";
const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-[10px] shadow-[0_12px_20px_-5px_#0520390D] p-[20px] sd:p-[30px] pt-[20px]">
      <div className="text-center mb-[20px]">
        <span className="bg-grey-fe rounded-full inline-flex w-[100px] h-[100px] sd:w-[110px] sd:h-[110px] p-[20px] sd:p-[25px]">
          <Image
            src={image}
            width={100}
            height={100}
            alt={title}
            className="object-fit"
          />
        </span>
      </div>
      <h3
        className="tracking-tight text-[22px] sd:text-[26px] font-semibold text-center mb-[10px]"
        style={{ textWrap: "balance" }}
      >
        {title}
      </h3>
      <p className="text-[14px] t:text-[16px] sd:text-[18px] leading-[1.5] text-center">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
