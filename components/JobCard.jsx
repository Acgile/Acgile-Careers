import Link from "next/link";

const JobCard = ({ job }) => {
  const { fields: jobData } = job;
  return (
    <div className="relative p-[20px] t:p-[30px] sd:p-[35px] border border-grey-cf shadow-[0_15px_20px_-5px_#05203905] rounded-[16px] t:rounded-[20px] sd:rounded-[20px]">
      <h2 className="font-semibold text-[26px] t:text-[34px] tracking-tight mb-[10px] t:mb-[20px]">
        {job.title}
      </h2>
      <div
        className="job-description mb-[40px]"
        dangerouslySetInnerHTML={{ __html: jobData.description }}
      />

      <div className="hidden sd:flex gap-[25px]">
        <p className="flex gap-[10px] items-center">
          <IconLocation />{" "}
          <span className="text-secondary">
            <span className="font-bold">Location: </span> {jobData.location}
          </span>
        </p>
        <p className="flex gap-[10px] items-center">
          <IconTime />{" "}
          <span className="text-secondary">
            <span className="font-bold">Employment Type: </span>{" "}
            {jobData.employmentType}
          </span>
        </p>
        {jobData.department && (
          <p className="flex gap-[10px] items-center">
            <IconDepartment />{" "}
            <span className="text-secondary">
              <span className="font-bold">Department: </span>{" "}
              {jobData.department}
            </span>
          </p>
        )}
      </div>
      <table className="sd:hidden mb-[30px] t:mb-0">
        <tbody>
          <tr>
            <td className="pb-[10px]">
              <p className="flex justify-center">
                <IconLocation />
              </p>
            </td>
            <td className="pb-[10px] text-secondary">
              <span className="inline-block mx-[10px] font-bold">
                Location:
              </span>
              {jobData.location}
            </td>
          </tr>
          <tr>
            <td className="pb-[10px]">
              <p className="flex justify-center">
                <IconTime />
              </p>
            </td>
            <td className="pb-[10px] text-secondary">
              <span className="inline-block mx-[10px] font-bold">
                Employment Type:
              </span>
              {jobData.employmentType}
            </td>
          </tr>
          <tr>
            <td className="pb-[10px] t:pb-0">
              <p className="flex justify-center">
                <IconDepartment />
              </p>
            </td>
            <td className="pb-[10px] t:pb-0 text-secondary">
              <span className="inline-block mx-[10px] font-bold">
                Department:
              </span>
              {jobData.department}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center t:absolute t:right-[30px] t:bottom-[30px] sd:top-[35px] sd:bottom-auto sd:right-[35px]">
        <Link
          className={`relative overflow-hidden border bg-white border-secondary text-secondary rounded-full font-semibold flex items-center justify-between gap-x-[10px] p-[3px] sd:p-[5px] pl-[20px] sd:pl-[25px] group`}
          href={`job?id=${job.id}`}
        >
          <span
            className={`group-hover:text-white relative z-10 transition-all ease-in-out duration-200 text-[14px] t:text-[18px]`}
          >
            Apply
          </span>
          <span
            className={`bg-secondary before:bg-secondary inline-flex justify-center items-center rounded-full
        before:block before:absolute before:rounded-full before:z-0  before:transition-transform before:duration-500  before:linear group-hover:before:transform group-hover:before:scale-[12] w-[30px] h-[30px] before:w-[20px] before:h-[20px]`}
          >
            <svg
              className="relative z-10 group-hover:rotate-45 transition-all duration-500 linear sd:w-[12px] sd:h-[12px]"
              width="10"
              height="9"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`fill-white`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.27139 0.666992C1.71911 0.666992 1.27139 1.11471 1.27139 1.66699C1.27139 2.21928 1.71911 2.66699 2.27139 2.66699L7.91772 2.66699L0.6678 9.91692C0.277276 10.3074 0.277276 10.9406 0.6678 11.3311C1.05832 11.7217 1.69149 11.7217 2.08201 11.3311L9.332 4.08115V9.7276C9.332 10.2799 9.77971 10.7276 10.332 10.7276C10.8843 10.7276 11.332 10.2799 11.332 9.7276L11.332 0.666991L2.27139 0.666992Z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;

const IconLocation = () => (
  <svg
    className="w-[12px] h-[14px] t:w-[14px] t:h-[16px]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      fill="#052039"
      d="M6 0a5.762 5.762 0 0 1 5.762 5.762c0 2.435-1.71 5.088-5.088 7.988a1.033 1.033 0 0 1-1.35 0l-.223-.195C1.873 10.731.238 8.142.238 5.762A5.762 5.762 0 0 1 6 0Zm0 3.546a2.216 2.216 0 1 0 0 4.432 2.216 2.216 0 0 0 0-4.432Z"
    />
  </svg>
);

const IconTime = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
    <path
      fill="#052039"
      stroke="#052039"
      strokeWidth=".156"
      d="M8 3.722a.778.778 0 0 0-.778.778v3.505l.007.092v.005c.023.17.1.327.221.448l2.1 2.1.004.003.065.058.004.004A.778.778 0 0 0 10.65 9.55L8.778 7.678V4.495l-.005-.082V4.41A.778.778 0 0 0 8 3.722ZM15.078 8A7.078 7.078 0 1 0 .923 8a7.078 7.078 0 0 0 14.155 0ZM4.095 4.095a5.522 5.522 0 1 1 7.81 7.81 5.522 5.522 0 0 1-7.81-7.81Z"
    />
  </svg>
);

const IconDepartment = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" fill="none">
    <path
      fill="#052039"
      fillRule="evenodd"
      d="M2.5 3.501a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-.498 1.45a2.5 2.5 0 1 1 1.5-.16v1.207c.284-.003.568-.009.854-.015h.021c.36-.008.725-.016 1.079-.016.714 0 1.438.031 2.084.175.65.144 1.29.417 1.761.957.443.506.666 1.163.697 1.95a2.5 2.5 0 1 1-1.496.157c-.007-.596-.157-.922-.33-1.12-.184-.21-.482-.374-.957-.48-.48-.107-1.068-.139-1.76-.139-.337 0-.688.008-1.054.016h-.014c-.288.006-.585.012-.885.015v1.71a2.5 2.5 0 1 1-1.5-.16V4.952ZM1.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm7 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      clipRule="evenodd"
    />
  </svg>
);
