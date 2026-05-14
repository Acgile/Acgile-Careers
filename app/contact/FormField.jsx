const FormField = ({
  label,
  type = "text",
  name,
  placeholder,
  registerInput,
  errors,
}) => {
  return (
    <fieldset>
      <label htmlFor={name}>{label}:</label>
      {type === "text" && (
        <input
          {...registerInput}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          className={
            errors[name]
              ? "border-[#FD473B] pr-[55px]"
              : "border-grey-cf focus:border-secondary"
          }
        />
      )}
      {type === "textarea" && (
        <textarea
          {...registerInput}
          name={name}
          id={name}
          maxLength={800}
          placeholder={placeholder}
          className={
            errors[name]
              ? "border-[#FD473B] focus:border-[#FD473B] pr-[55px]"
              : "border-grey-cf focus:border-secondary"
          }
        ></textarea>
      )}
      {errors[name] && (
        <>
          <p
            className={`absolute ${
              type === "text"
                ? "bottom-[38px] t:bottom-[60px] sd:bottom-[60px] md:bottom-[82px]"
                : "top-0 t:top-[5px]"
            } right-0 text-[#FD473B] text-[10px] t:text-[11px] sd:text-[10px] md:text-[11.5px] ld:text-[13px] text-right mt-[3px]`}
          >
            {errors[name].message}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={10}
            height={10}
            viewBox="0 0 20 20"
            className="t:w-[13px] t:h-[13px] sd:w-[20px] sd:h-[20px] absolute bottom-[11px] right-[10px] t:bottom-[18px] t:right-[12px] sd:bottom-[26px] sd:right-[20px] transition-all ease-in-out duration-200 pointer-events-none"
          >
            <path
              fill="#FD473B"
              d="M9 5h2v6H9V5Zm1 8c.283 0 .521.096.713.288.192.192.288.43.287.712 0 .283-.096.52-.288.712A.973.973 0 0 1 10 15a.965.965 0 0 1-.712-.288A.972.972 0 0 1 9 14c0-.283.096-.521.288-.713A.964.964 0 0 1 10 13Zm0-13a9.732 9.732 0 0 0-3.9.788 10.114 10.114 0 0 0-3.175 2.137c-.9.9-1.612 1.958-2.137 3.175A9.755 9.755 0 0 0 0 10c0 1.383.263 2.683.788 3.9a10.114 10.114 0 0 0 2.137 3.175c.9.9 1.958 1.612 3.175 2.137A9.755 9.755 0 0 0 10 20a9.733 9.733 0 0 0 3.9-.788 10.114 10.114 0 0 0 3.175-2.137c.9-.9 1.613-1.958 2.138-3.175A9.72 9.72 0 0 0 20 10a9.733 9.733 0 0 0-.788-3.9 10.114 10.114 0 0 0-2.137-3.175c-.9-.9-1.958-1.613-3.175-2.138A9.72 9.72 0 0 0 10 0Z"
            />
          </svg>
        </>
      )}
    </fieldset>
  );
};

export default FormField;
