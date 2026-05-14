const Testimonial = ({ testimonial }) => {
  const starRating = Array.from(Array(5));
  function getMonthsDifference(dateString) {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const yearsDifference = currentDate.getFullYear() - givenDate.getFullYear();
    const monthsDifference = currentDate.getMonth() - givenDate.getMonth();
    const totalMonthsDifference = yearsDifference * 12 + monthsDifference;
    return totalMonthsDifference < 1 ? 1 : totalMonthsDifference;
  }
  return (
    <div className="h-full border border-grey-cf shadow-[0_25px_40px_-7px_#00000008] rounded-[20px] p-[20px] t:p-[30px] flex flex-col gap-[30px]">
      <div className="flex items-center t:items-start justify-between">
        <div>
          <div className="flex items-center gap-[13px] t:gap-[15px] mb-[10px] t:mb-[20px]">
            {/* Image Placeholder */}
            <div className="flex items-center justify-center rounded-full bg-[#1976D2] text-white font-bold t:text-[26px] w-[60px] h-[60px] t:w-[100px] t:h-[100px] border-[3px] t:border-[5px] border-white shadow-[0_10px_15px_#0520390D]">
              {testimonial.name.split(" ").map((item) => item[0].toUpperCase())}
            </div>

            {/* User Info */}
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-[14px] t:text-[20px] font-semibold">
                {testimonial.name}
              </h3>
              <p className="text-[12px] t:text-[16px] text-grey-97">
                {getMonthsDifference(testimonial.date)} Months Ago
              </p>
            </div>
          </div>

          {/* User Rating */}
          <div className="flex items-center gap-[3px] t:gap-[7px]">
            {starRating.map((item, index) => (
              <svg
                key={index}
                className="t:w-[21px] t:h-[20px]"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.82576 4.22661L0.571121 4.84347L0.495765 4.85881C0.381689 4.88909 0.277694 4.94911 0.1944 5.03273C0.111106 5.11635 0.051497 5.22058 0.0216603 5.33477C-0.00817647 5.44896 -0.00717185 5.56903 0.0245715 5.68271C0.0563148 5.79639 0.117659 5.8996 0.202341 5.98182L3.28462 8.98207L2.55773 13.22L2.54906 13.2934C2.54208 13.4114 2.56658 13.5291 2.62005 13.6345C2.67352 13.7399 2.75405 13.8292 2.85338 13.8933C2.95271 13.9573 3.06728 13.9938 3.18536 13.999C3.30343 14.0042 3.42077 13.978 3.52536 13.9229L7.33053 11.9223L11.127 13.9229L11.1937 13.9536C11.3038 13.997 11.4234 14.0103 11.5403 13.9921C11.6572 13.974 11.7672 13.9251 11.859 13.8504C11.9508 13.7757 12.021 13.678 12.0625 13.5672C12.1041 13.4565 12.1154 13.3366 12.0953 13.22L11.3678 8.98207L14.4514 5.98115L14.5034 5.92447C14.5777 5.83295 14.6264 5.72337 14.6446 5.6069C14.6628 5.49043 14.6497 5.37122 14.6068 5.26142C14.5639 5.15162 14.4927 5.05515 14.4004 4.98185C14.308 4.90855 14.1979 4.86103 14.0813 4.84413L9.82663 4.22661L7.92471 0.372094C7.86968 0.260416 7.78448 0.166374 7.67877 0.100614C7.57305 0.034853 7.45103 0 7.32653 0C7.20203 0 7.08001 0.034853 6.9743 0.100614C6.86858 0.166374 6.78338 0.260416 6.72835 0.372094L4.82576 4.22661Z"
                  fill={index + 1 <= testimonial.rating ? "#ffb03a" : "white"}
                />
              </svg>
            ))}
            <span className="ml-[5px] leading-[1] text-[12px] t:text-[18px] text-grey-97">
              {testimonial.rating} / 5
            </span>
          </div>
        </div>

        {/* Google Logo */}
        <svg
          className="t:mt-[30px]"
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.611 16.583H38V16.5H20V24.5H31.303C29.654 29.157 25.223 32.5 20 32.5C13.373 32.5 8 27.127 8 20.5C8 13.873 13.373 8.5 20 8.5C23.059 8.5 25.842 9.654 27.961 11.539L33.618 5.882C30.046 2.553 25.268 0.5 20 0.5C8.955 0.5 0 9.455 0 20.5C0 31.545 8.955 40.5 20 40.5C31.045 40.5 40 31.545 40 20.5C40 19.159 39.862 17.85 39.611 16.583Z"
            fill="#FFC107"
          />
          <path
            d="M2.30469 11.191L8.87569 16.01C10.6537 11.608 14.9597 8.5 19.9987 8.5C23.0577 8.5 25.8407 9.654 27.9597 11.539L33.6167 5.882C30.0447 2.553 25.2667 0.5 19.9987 0.5C12.3167 0.5 5.65469 4.837 2.30469 11.191Z"
            fill="#FF3D00"
          />
          <path
            d="M20.0001 40.5007C25.1661 40.5007 29.8601 38.5237 33.4091 35.3087L27.2191 30.0707C25.1436 31.6491 22.6075 32.5028 20.0001 32.5007C14.7981 32.5007 10.3811 29.1837 8.71707 24.5547L2.19507 29.5797C5.50507 36.0567 12.2271 40.5007 20.0001 40.5007Z"
            fill="#4CAF50"
          />
          <path
            d="M39.611 16.583H38V16.5H20V24.5H31.303C30.5142 26.7164 29.0934 28.6532 27.216 30.071L27.219 30.069L33.409 35.307C32.971 35.705 40 30.5 40 20.5C40 19.159 39.862 17.85 39.611 16.583Z"
            fill="#1976D2"
          />
        </svg>
      </div>
      <p className="italic text-grey-71 text-[14px] t:text-[18px] leading-[22px] t:leading-[28px]">
        &quot;{testimonial.comment}&quot;
      </p>
    </div>
  );
};

export default Testimonial;
