const AnimatedButton = ({ title, link }) => {
  return (
    <a
      className="overflow-hidden relative transition-all duration-500 inline-flex items-center justify-center gap-x-[10px] bg-primary text-white font-semibold rounded-full shadow-[0_10px_20px_#01517E1A] hover:shadow-[0_15px_30px_#01517E44] border-[3px] border-primary group
      p-[2px] pl-[14px] sd:p-[5px] sd:pl-[25px]"
      href={link}
    >
      <span className="group-hover:text-secondary relative z-10 transition-all ease-in-out duration-200 text-[12px] sd:text-[18px]">
        {title}
      </span>
      <span
        className=" bg-white inline-flex justify-center items-center rounded-full  
             before:block before:absolute before:rounded-full before:bg-white before:z-0 before:transition-transform before:duration-500  before:linear group-hover:before:transform group-hover:before:scale-[12]
             w-[28px] h-[28px] sd:w-[48px] sd:h-[48px] before:w-[24px] before:h-[24px] sd:before:w-[40px] sd:before:h-[40px]"
      >
        <svg
          className="relative z-10 group-hover:rotate-45 transition duration-500 
          sd:w-[12px] sd:h-[12px] group-hover:translate-x-[-5px] sd:group-hover:translate-x-[-10px]"
          width="10"
          height="8"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.27139 0.667969C1.71911 0.667969 1.27139 1.11568 1.27139 1.66797C1.27139 2.22025 1.71911 2.66797 2.27139 2.66797L7.91772 2.66797L0.6678 9.91789C0.277276 10.3084 0.277276 10.9416 0.6678 11.3321C1.05832 11.7226 1.69149 11.7226 2.08201 11.3321L9.332 4.08212V9.72857C9.332 10.2809 9.77971 10.7286 10.332 10.7286C10.8843 10.7286 11.332 10.2809 11.332 9.72857L11.332 0.667968L2.27139 0.667969Z"
            fill="#052039"
          />
        </svg>
      </span>
    </a>
  );
};

AnimatedButton.defaultProps = {
  title: "Button",
  link: "/",
};
export default AnimatedButton;
