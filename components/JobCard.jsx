import Link from "next/link";



const JobCard = ({ job }) => {
  const { fields: jobData,date: publishedDate } = job;
const formattedPublishedDate = new Date(publishedDate).toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
}); 
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
        
          <p className="flex gap-[10px] items-center">
            <IconPublished />{" "}
            <span className="text-secondary">
              <span className="font-bold">Published: </span>{" "}
              {formattedPublishedDate}
            </span>
          </p>
        
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
const IconPublished = () => (
   <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" width="15" height="15" data-name="Layer 2" viewBox="0 0 367.24 367.23">
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path d="M335.21,71.04l.15,140.73c40.18,33.33,42.48,93.19,6.36,129.55-36.28,36.52-96.45,34.36-129.93-5.98l-171.76-.03C17.61,335.3,0,317.33,0,295.04V72.2C0,49.83,17.66,32.02,39.92,31.94l23.93-.08v-7.73C63.88,10.4,74.93-.21,88.19,0s23.89,11.15,23.61,24.91c-.05,2.29.02,4.4.1,6.99h111.41s.26-8.49.26-8.49C224,10.02,234.87-.13,247.68,0c13.18.13,23.72,10.65,23.78,24.13l.03,7.72,23.81.07c21.27.06,39.89,16.81,39.91,39.11ZM95.79,55.91l.04-31.68c0-4.9-3.85-8.39-8.35-8.22-4.13.16-7.67,3.58-7.66,8.22l.06,31.98c0,4.58,4.29,7.76,8.28,7.58,3.75-.17,7.63-3.19,7.64-7.89ZM255.5,55.28l-.02-31.1c0-4.75-3.64-8.16-7.91-8.19s-8.04,3.4-8.04,8.17v31.48c0,4.76,3.7,8.2,8.03,8.16s7.94-3.4,7.93-8.52ZM271.41,56.14c-.25,13.76-11.38,23.9-24.44,23.64-12.53-.24-22.99-10.32-23.39-23.4l-.25-8.49h-111.44s-.1,7.76-.1,7.76c-.17,13.72-11.06,24.34-24.35,24.13-13.33-.21-23.71-11.18-23.62-24.89l.04-7-23.98.03c-13.34.01-23.99,10.79-23.92,24.13l.12,23.75h303.14s.15-23.76.15-23.76c.08-13.04-10.22-24.04-23.41-24.07l-24.39-.06-.15,8.23ZM201.04,319.3c-17.35-35.45-10.07-75.7,16.53-102.16,26.65-26.51,67.27-33.3,101.77-16.01v-89.39s-303.35.02-303.35.02l.03,184.04c0,13.79,11.42,23.57,24.73,23.57l160.29-.07ZM351.29,279.42c0-39.68-32.17-71.84-71.84-71.84s-71.84,32.17-71.84,71.84,32.17,71.84,71.84,71.84,71.84-32.17,71.84-71.84Z"/>
      <path d="M78.53,239.46l-13.2.03c-9.71.02-17.43-7.94-17.41-17.64l.02-12.84c.02-9.56,7.8-17.34,17.36-17.36l12.84-.02c9.69-.02,17.61,7.68,17.63,17.42l.02,12.8c.02,9.44-7.4,17.59-17.27,17.62ZM79.85,223.45l-.16-15.83-15.59-.03-.2,15.82,15.95.04Z"/>
      <path d="M78.62,175.56l-13.31.04c-9.58.03-17.35-7.81-17.37-17.38l-.03-12.85c-.02-9.67,7.7-17.6,17.41-17.62l12.8-.03c9.82-.02,17.7,7.85,17.67,17.67l-.03,12.81c-.02,9.27-7.45,17.31-17.15,17.34ZM79.81,159.63l-.07-15.84-15.71-.06-.08,15.84,15.86.06Z"/>
      <path d="M206.61,175.54l-13.3.09c-9.67.07-17.61-7.71-17.63-17.43l-.02-12.8c-.02-9.82,7.86-17.7,17.68-17.67l12.8.03c9.71.02,17.43,7.94,17.41,17.62l-.03,12.86c-.02,9.14-7.29,17.23-16.9,17.3ZM207.49,159.69l.06-15.88-15.83-.06-.07,15.75,15.84.19Z"/>
      <path d="M270.25,175.56l-13.31.04c-9.58.03-17.35-7.81-17.37-17.38l-.02-12.85c-.02-9.67,7.69-17.6,17.41-17.62l12.8-.03c9.83-.02,17.7,7.85,17.67,17.67l-.03,12.81c-.02,9.27-7.45,17.31-17.15,17.35ZM271.43,159.63l-.07-15.84-15.71-.06-.08,15.84,15.86.06Z"/>
      <path d="M142.24,175.59l-12.55.06c-9.72.05-17.85-7.56-17.87-17.44l-.03-12.84c-.02-9.59,7.63-17.6,17.24-17.6h13.4c9.62,0,17.27,8,17.24,17.6l-.03,12.86c-.02,9.43-7.64,17.31-17.4,17.36ZM143.64,159.65l.04-15.8-15.83-.12-.07,15.79,15.86.13Z"/>
      <path d="M142.8,239.42l-13.77.06c-9.61.04-17.26-8-17.24-17.62l.03-12.81c.02-9.99,8.15-17.46,17.87-17.45h12.08c9.74,0,17.85,7.46,17.87,17.46l.03,12.82c.02,9.26-7.2,17.51-16.87,17.55ZM143.69,223.53l-.06-15.83-15.75-.1-.16,15.78,15.96.15Z"/>
      <path d="M78.62,303.32l-13.27.04c-9.99.03-17.46-8.13-17.46-17.89v-12.08c0-9.72,7.47-17.84,17.45-17.87l12.82-.03c9.61-.02,17.61,7.62,17.6,17.25v13.41c0,9.21-7.51,17.15-17.14,17.18ZM79.84,287.21l-.1-15.65-15.81.05v15.61s15.91-.01,15.91-.01Z"/>
      <path d="M142.25,303.33l-12.55.06c-10.13.05-17.95-7.86-17.95-17.93v-12.05c0-10.15,7.8-17.95,17.95-17.95h12.08c9.64,0,17.84,7.35,17.84,17.2v13.56c0,9.32-7.73,17.06-17.37,17.1ZM143.77,287.11l-.19-15.57-15.84.16.24,15.7,15.79-.29Z"/>
      <path d="M240.05,285.53c-3.47-3.46-3.49-8.41-.3-11.65,2.7-2.74,7.83-3.36,11.07-.14l17.14,17.01,39.48-39.45c3.21-3.21,8.09-2.97,11.1-.13s3.51,8.06.14,11.43l-45.22,45.22c-3.08,3.08-8.16,2.93-11.15-.05l-22.28-22.23Z"/>
    </g>
  </g>
</svg>

);