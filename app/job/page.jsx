import Image from "next/image";
import { getSingleJob } from "@/lib/utils";

export const revalidate = 60; // Revalidate every 60 seconds
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import AnimatedSection from "@/components/AnimatedSection";
import Popup from "./Popup";

function formatSalary(number) {
  if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K";
  }
  return number;
}

const SingleJob = async ({ searchParams }) => {
  const { id } = await searchParams;
  const jobData = await getSingleJob(id);

  if (!jobData || !jobData.job)
    return (
      <AnimatedSection className="container flex flex-col items-center justify-center gap-[30px] sd:gap-[80px] my-[70px] t:mt-[60px] t:mb-[90px] sd:my-[110px]">
        <h2 className="text-pretty text-center font-bold text-secondary tracking-[-1px] sd:tracking-[-2px] mb-[8px] sd:mb-[15px] text-[24px] t:text-[36px] sd:text-[58px] leading-[30px] t:leading-[44px] sd:leading-[64px] mx-auto">
          No Job Found
        </h2>
        <Image
          src="/no-job-available.svg"
          width={800}
          height={630}
          alt="No Jobs Available Right Now at Acgile"
        />
      </AnimatedSection>
    );

  const { job } = jobData;
  return (
    <>
      <AnimatedSection className="container my-[20px] t:my-[30px]">
        <div className="bg-grey-fa rounded-[4px] t:rounded-[10px] sd:rounded-[20px] p-[15px] t:p-[20px] t:pt-[30px] sd:pt-[55px] sd:px-[40px] sd:pb-[30px] flex justify-between items-end sd:gap-[50px] max-w-[1344px] mx-auto">
          <div>
            <p className="text-[8px] t:text-[12px] sd:text-[18px] text-grey-97">
              Job Title:
            </p>
            <h2 className="font-semibold tracking-tight text-[14px] t:text-[22px] sd:text-[34px] mb-[40px] t:mb-[50px] sd:mb-[80px]">
              {job.title}
            </h2>
            <div className="hidden t:flex flex-wrap gap-[7px] sd:gap-[12px]">
              <FeatureBlock title="Location" value={job.fields.location}>
                <IconLocation />
              </FeatureBlock>
              <FeatureBlock
                title="Employment Type"
                value={job.fields.employmentType}
              >
                <IconTime />
              </FeatureBlock>
              {job.fields.department && (
                <FeatureBlock title="Department" value={job.fields.department}>
                  <IconDepartment />
                </FeatureBlock>
              )}
            </div>
            <table className="t:hidden border-separate border-spacing-y-1 border-spacing-x-0">
              <tbody>
                <tr>
                  <td className="pl-[5px] py-[2px] mb-[5px] bg-grey-f5 rounded-l-[2px]">
                    <p className="flex justify-center">
                      <IconLocation />
                    </p>
                  </td>
                  <td className="pr-[5px] py-[2px] mb-[5px] bg-grey-f5 text-secondary rounded-r-[2px]">
                    <p className="text-[8px]">
                      <span className="inline-block mx-[2px] font-semibold">
                        Location:
                      </span>
                      {job.fields.location}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="pl-[5px] py-[2px] bg-grey-f5 rounded-l-[2px]">
                    <p className="flex justify-center">
                      <IconTime />
                    </p>
                  </td>
                  <td className="pr-[5px] py-[2px] bg-grey-f5 text-secondary rounded-r-[2px]">
                    <p className="text-[8px]">
                      <span className="inline-block mx-[2px] font-semibold">
                        Employment Type:
                      </span>
                      {job.fields.employmentType}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="pl-[5px] py-[2px] bg-grey-f5 rounded-l-[2px]">
                    <p className="flex justify-center">
                      <IconDepartment />
                    </p>
                  </td>
                  <td className="pr-[5px] py-[2px] bg-grey-f5 text-secondary rounded-r-[2px]">
                    <p className="text-[8px]">
                      <span className="inline-block mx-[2px] font-semibold">
                        Department:
                      </span>
                      {job.fields.department}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            {job.fields.salaryRange.startingSalary && (
              <p className="flex items-center justify-end gap-[4px] mb-[12px] t:mb-[40px] sd:mb-[55px]">
                <IconSalary />{" "}
                <span className="sd:ml-[10px] text-[12px] t:text-[18px] sd:text-[26px] text-secondary font-bold">
                  PKR {formatSalary(job.fields.salaryRange.startingSalary)} -{" "}
                  {formatSalary(job.fields.salaryRange.endingSalary)}
                </span>
              </p>
            )}
            <p className="text-secondary text-[8px] t:text-[10px] sd:text-[16px] flex items-center justify-end t:mb-[5px]">
              <IconCalendar />{" "}
              <span className="ml-[3px] sd:ml-[8px] font-semibold">
                Posted:&nbsp;{" "}
              </span>{" "}
              {job.date.split("T")[0]}
            </p>
            {job.fields.additionalDetails.applicationDeadline && (
              <p className="text-secondary text-[8px] t:text-[10px] sd:text-[16px] flex items-center justify-end">
                <IconApply />{" "}
                <span className="ml-[3px] sd:ml-[8px] font-semibold shrink-0">
                  Apply Before:&nbsp;{" "}
                </span>{" "}
                <span className="shrink-0">
                  {job.fields.additionalDetails.applicationDeadline}
                </span>
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Job Description */}
      {job.fields.description && (
        <AnimatedSection className="mt-[30px] sd:mt-[70px]">
          <DetailsBlock title="Description">
            <div dangerouslySetInnerHTML={{ __html: job.fields.description }} />
          </DetailsBlock>
        </AnimatedSection>
      )}
      {job.fields.additionalDetails.aboutThisRole && (
        <AnimatedSection>
          <DetailsBlock title="About This Role">
            <div
              dangerouslySetInnerHTML={{
                __html: job.fields.additionalDetails.aboutThisRole,
              }}
            />
          </DetailsBlock>
        </AnimatedSection>
      )}
      {job.fields.additionalDetails.qualifications && (
        <AnimatedSection>
          <DetailsBlock title="Qualifications / Skillset / Must Have">
            <div
              dangerouslySetInnerHTML={{
                __html: job.fields.additionalDetails.qualifications,
              }}
            />
          </DetailsBlock>
        </AnimatedSection>
      )}
      {job.fields.additionalDetails.responsibilities && (
        <AnimatedSection>
          <DetailsBlock title="Responsibilities">
            <div
              dangerouslySetInnerHTML={{
                __html: job.fields.additionalDetails.responsibilities,
              }}
            />
          </DetailsBlock>
        </AnimatedSection>
      )}
      {job.fields.additionalDetails.whatWeOffer && (
        <AnimatedSection>
          <DetailsBlock title="What We Offer">
            <div
              dangerouslySetInnerHTML={{
                __html: job.fields.additionalDetails.whatWeOffer,
              }}
            />
          </DetailsBlock>
        </AnimatedSection>
      )}
      {job.fields.goodToHave && (
        <AnimatedSection>
          <DetailsBlock title="Good To Have">
            <div dangerouslySetInnerHTML={{ __html: job.fields.goodToHave }} />
          </DetailsBlock>
        </AnimatedSection>
      )}
      <Popup jobTitle={job.title} />
    </>
  );
};

export default SingleJob;

const FeatureBlock = ({ title, value, children }) => (
  <p className="flex items-center text-[8px] t:text-[10px] sd:text-[16px] text-secondary px-[5px] py-[6px] sd:px-[15px] sd:py-[10px] bg-grey-f5 rounded-[4px] sd:rounded-[7px]">
    {children} <span className="ml-[5px] font-semibold">{title}:&nbsp;</span>{" "}
    {value}
  </p>
);

const DetailsBlock = ({ title, children }) => (
  <div className="container my-[12px] t:my-[25px] sd:my-[40px]">
    <div className="max-w-[1050px] mx-auto">
      <h2 className="tracking-tight text-[14px] t:text-[18px] sd:text-[26px] mb-[5px] t:mb-[10px] sd:mb-[20px]">
        {title}
      </h2>
      <div className="job-details">{children}</div>
    </div>
  </div>
);

const IconLocation = () => (
  <svg
    className="w-[7px] h-[9px] sd:w-[14px] sd:h-[17px]"
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5849 0.5C8.33133 0.5 10.0062 1.19376 11.2411 2.42867C12.476 3.66358 13.1698 5.33848 13.1698 7.08491C13.1698 9.86745 11.2146 12.8999 7.35483 16.2146C7.14021 16.399 6.86658 16.5002 6.58364 16.5C6.3007 16.4998 6.02725 16.398 5.81295 16.2133L5.55766 15.9917C1.86876 12.7635 0 9.80532 0 7.08491C0 5.33848 0.693765 3.66358 1.92867 2.42867C3.16358 1.19376 4.83848 0.5 6.5849 0.5ZM6.5849 4.55225C5.9132 4.55225 5.26901 4.81908 4.79405 5.29405C4.31908 5.76901 4.05225 6.4132 4.05225 7.08491C4.05225 7.75661 4.31908 8.4008 4.79405 8.87576C5.26901 9.35073 5.9132 9.61756 6.5849 9.61756C7.25661 9.61756 7.9008 9.35073 8.37576 8.87576C8.85073 8.4008 9.11756 7.75661 9.11756 7.08491C9.11756 6.4132 8.85073 5.76901 8.37576 5.29405C7.9008 4.81908 7.25661 4.55225 6.5849 4.55225Z"
      fill="#052039"
    />
  </svg>
);

const IconTime = () => (
  <svg
    className="w-[8px] h-[8px] sd:w-[16px] sd:h-[16px]"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0641 4.40043L10.0643 4.40042L10.0636 4.3947C10.0378 4.17577 9.9326 3.97393 9.76787 3.82744C9.60314 3.68096 9.39038 3.60003 9.16994 3.6C8.93123 3.6 8.70231 3.69482 8.53353 3.8636C8.36474 4.03239 8.26992 4.26131 8.26992 4.5V8.5H8.26969L8.27016 8.50685L8.27736 8.61165L8.27716 8.61167L8.27798 8.61788C8.30387 8.81408 8.3937 8.99628 8.53358 9.13628L8.53361 9.13631L10.9336 11.5363L10.9335 11.5364L10.9381 11.5406L11.0133 11.607L11.0132 11.6071L11.0184 11.6111C11.1992 11.751 11.4266 11.8168 11.6542 11.7951C11.8819 11.7734 12.0927 11.6659 12.2439 11.4944C12.3952 11.3229 12.4754 11.1002 12.4685 10.8717C12.4615 10.6431 12.3678 10.4258 12.2064 10.2638L12.2062 10.2637L10.0699 8.12738V4.5H10.0701L10.0697 4.49403L10.0641 4.40043ZM17.2699 8.5C17.2699 4.02637 13.6435 0.4 9.16992 0.4C4.69629 0.4 1.06992 4.02637 1.06992 8.5C1.06992 12.9736 4.69629 16.6 9.16992 16.6C13.6435 16.6 17.2699 12.9736 17.2699 8.5ZM4.71515 4.04523C5.89663 2.86375 7.49906 2.2 9.16992 2.2C10.8408 2.2 12.4432 2.86375 13.6247 4.04523C14.8062 5.22671 15.4699 6.82914 15.4699 8.5C15.4699 10.1709 14.8062 11.7733 13.6247 12.9548C12.4432 14.1363 10.8408 14.8 9.16992 14.8C7.49906 14.8 5.89663 14.1363 4.71515 12.9548C3.53367 11.7733 2.86992 10.1709 2.86992 8.5C2.86992 6.82914 3.53367 5.22671 4.71515 4.04523Z"
      fill="#052039"
      stroke="#052039"
      strokeWidth="0.2"
    />
  </svg>
);

const IconDepartment = () => (
  <svg
    className="w-[7px] h-[9px] sd:w-[14px] sd:h-[17px]"
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.02724 4.49927C2.39602 4.49927 1.88431 3.98756 1.88431 3.35634C1.88431 2.72512 2.39602 2.21341 3.02724 2.21341C3.65846 2.21341 4.17017 2.72512 4.17017 3.35634C4.17017 3.98756 3.65846 4.49927 3.02724 4.49927ZM2.45669 6.15669C1.15202 5.8923 0.169922 4.73901 0.169922 3.35634C0.169922 1.77829 1.44919 0.499023 3.02724 0.499023C4.60529 0.499023 5.88456 1.77829 5.88456 3.35634C5.88456 4.52767 5.17974 5.53438 4.17108 5.97551V7.35393C4.49468 7.35121 4.81949 7.34444 5.1463 7.33752L5.17092 7.337L5.17101 7.337C5.58279 7.32828 5.99888 7.31947 6.40336 7.31947C7.22022 7.31947 8.0476 7.3544 8.78587 7.51846C9.52801 7.68338 10.2594 7.99595 10.7987 8.61226C11.3048 9.19069 11.5595 9.94184 11.5956 10.8423C12.9014 11.1059 13.8846 12.2597 13.8846 13.6431C13.8846 15.2212 12.6053 16.5004 11.0272 16.5004C9.44919 16.5004 8.16992 15.2212 8.16992 13.6431C8.16992 12.471 8.8757 11.4637 9.88546 11.023C9.87796 10.3403 9.70592 9.96684 9.50848 9.74119C9.29771 9.50031 8.95762 9.31284 8.41397 9.19203C7.86645 9.07036 7.19373 9.03386 6.40336 9.03386C6.01725 9.03386 5.61681 9.04234 5.19865 9.05119L5.19847 9.05119L5.18258 9.05153C4.85326 9.0585 4.51367 9.06561 4.17108 9.06838V11.0239C5.17974 11.4651 5.88456 12.4718 5.88456 13.6431C5.88456 15.2212 4.60529 16.5004 3.02724 16.5004C1.44919 16.5004 0.169922 15.2212 0.169922 13.6431C0.169922 12.2604 1.15202 11.1071 2.45669 10.8428V6.15669ZM1.88431 13.6431C1.88431 14.2743 2.39602 14.786 3.02724 14.786C3.65846 14.786 4.17017 14.2743 4.17017 13.6431C4.17017 13.0119 3.65846 12.5002 3.02724 12.5002C2.39602 12.5002 1.88431 13.0119 1.88431 13.6431ZM9.88431 13.6431C9.88431 14.2743 10.396 14.786 11.0272 14.786C11.6585 14.786 12.1702 14.2743 12.1702 13.6431C12.1702 13.0119 11.6585 12.5002 11.0272 12.5002C10.396 12.5002 9.88431 13.0119 9.88431 13.6431Z"
      fill="#052039"
    />
  </svg>
);

const IconSalary = () => (
  <svg
    viewBox="0 0 26 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[13px] h-[10px] t:w-[16px] t:h-[12px] sd:w-[26px] sd:h-[21px]"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.1564 2.1564C2.42729 1.88552 2.79469 1.73333 3.17778 1.73333H19.3556C19.7386 1.73333 20.106 1.88552 20.3769 2.1564C20.6478 2.42729 20.8 2.79469 20.8 3.17778V4.62222H6.64444C5.80164 4.62222 4.99336 4.95702 4.39742 5.55297C3.80147 6.14892 3.46667 6.9572 3.46667 7.8V13.8667H3.17778C2.79469 13.8667 2.42729 13.7145 2.1564 13.4436C1.88552 13.1727 1.73333 12.8053 1.73333 12.4222V3.17778C1.73333 2.79469 1.88552 2.42729 2.1564 2.1564ZM3.46667 15.6H3.17778C2.33498 15.6 1.5267 15.2652 0.93075 14.6692C0.334801 14.0733 0 13.265 0 12.4222V3.17778C0 2.33498 0.334801 1.5267 0.93075 0.930749C1.5267 0.3348 2.33498 0 3.17778 0H19.3556C20.1984 0 21.0066 0.334801 21.6026 0.930749C22.1985 1.5267 22.5333 2.33498 22.5333 3.17778V4.62222H22.8222C23.665 4.62222 24.4733 4.95702 25.0693 5.55297C25.6652 6.14892 26 6.9572 26 7.8V17.0444C26 17.8872 25.6652 18.6955 25.0693 19.2915C24.4733 19.8874 23.665 20.2222 22.8222 20.2222H6.64444C5.80164 20.2222 4.99336 19.8874 4.39742 19.2915C3.80147 18.6955 3.46667 17.8872 3.46667 17.0444V15.6ZM21.6667 6.35556H6.64444C6.26135 6.35556 5.89395 6.50774 5.62307 6.77862C5.35218 7.04951 5.2 7.41691 5.2 7.8V14.7333V17.0444C5.2 17.4275 5.35218 17.7949 5.62307 18.0658C5.89395 18.3367 6.26135 18.4889 6.64444 18.4889H22.8222C23.2053 18.4889 23.5727 18.3367 23.8436 18.0658C24.1145 17.7949 24.2667 17.4275 24.2667 17.0444V7.8C24.2667 7.41691 24.1145 7.04951 23.8436 6.77862C23.5727 6.50774 23.2053 6.35556 22.8222 6.35556H21.6667ZM13.712 11.4008C13.9828 11.13 14.3502 10.9778 14.7333 10.9778C15.1164 10.9778 15.4838 11.13 15.7547 11.4008C16.0256 11.6717 16.1778 12.0391 16.1778 12.4222C16.1778 12.8053 16.0256 13.1727 15.7547 13.4436C15.4838 13.7145 15.1164 13.8667 14.7333 13.8667C14.3502 13.8667 13.9828 13.7145 13.712 13.4436C13.4411 13.1727 13.2889 12.8053 13.2889 12.4222C13.2889 12.0391 13.4411 11.6717 13.712 11.4008ZM14.7333 9.24444C13.8905 9.24444 13.0823 9.57925 12.4863 10.1752C11.8904 10.7711 11.5556 11.5794 11.5556 12.4222C11.5556 13.265 11.8904 14.0733 12.4863 14.6692C13.0823 15.2652 13.8905 15.6 14.7333 15.6C15.5761 15.6 16.3844 15.2652 16.9804 14.6692C17.5763 14.0733 17.9111 13.265 17.9111 12.4222C17.9111 11.5794 17.5763 10.7711 16.9804 10.1752C16.3844 9.57925 15.5761 9.24444 14.7333 9.24444ZM9.03062 13.004C9.35259 12.6499 9.32648 12.1017 8.97231 11.7798C8.61813 11.4578 8.07001 11.4839 7.74804 11.8381L7.73649 11.8508C7.41452 12.205 7.44063 12.7531 7.79481 13.0751C8.14898 13.397 8.6971 13.3709 9.01907 13.0167L9.03062 13.004ZM21.7417 13.004C22.0637 12.6499 22.0376 12.1017 21.6834 11.7798C21.3292 11.4578 20.7811 11.4839 20.4592 11.8381L20.4476 11.8508C20.1256 12.205 20.1517 12.7531 20.5059 13.0751C20.8601 13.397 21.4082 13.3709 21.7302 13.0167L21.7417 13.004Z"
      fill="#052039"
    />
  </svg>
);

const IconCalendar = () => (
  <svg
    className="w-[9px] h-[8px] t:w-[10px] t:h-[9px] sd:w-[19px] sd:h-[18px]"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.8557 0C6.02279 0 6.18303 0.0663748 6.30118 0.184523C6.41933 0.302671 6.4857 0.462914 6.4857 0.63V1.8081H13.251V0.6381C13.251 0.471014 13.3174 0.310771 13.4355 0.192623C13.5537 0.0744748 13.7139 0.0081 13.881 0.0081C14.0481 0.0081 14.2083 0.0744748 14.3265 0.192623C14.4446 0.310771 14.511 0.471014 14.511 0.6381V1.8081H16.95C17.4272 1.8081 17.8849 1.99762 18.2225 2.33499C18.56 2.67236 18.7498 3.12997 18.75 3.6072V16.2009C18.7498 16.6781 18.56 17.1357 18.2225 17.4731C17.8849 17.8105 17.4272 18 16.95 18H2.55C2.07277 18 1.61507 17.8105 1.27753 17.4731C0.939986 17.1357 0.750239 16.6781 0.75 16.2009V3.6072C0.750239 3.12997 0.939986 2.67236 1.27753 2.33499C1.61507 1.99762 2.07277 1.8081 2.55 1.8081H5.2257V0.6291C5.22594 0.46217 5.29242 0.302158 5.41054 0.184204C5.52866 0.0662511 5.68877 -1.70337e-07 5.8557 0ZM2.01 6.9678V16.2009C2.01 16.2718 2.02397 16.342 2.05111 16.4075C2.07824 16.4731 2.11802 16.5326 2.16816 16.5827C2.21831 16.6329 2.27784 16.6727 2.34335 16.6998C2.40887 16.7269 2.47909 16.7409 2.55 16.7409H16.95C17.0209 16.7409 17.0911 16.7269 17.1566 16.6998C17.2222 16.6727 17.2817 16.6329 17.3318 16.5827C17.382 16.5326 17.4218 16.4731 17.4489 16.4075C17.476 16.342 17.49 16.2718 17.49 16.2009V6.9804L2.01 6.9678ZM6.7503 13.1571V14.6565H5.25V13.1571H6.7503ZM10.4997 13.1571V14.6565H9.0003V13.1571H10.4997ZM14.25 13.1571V14.6565H12.7497V13.1571H14.25ZM6.7503 9.5778V11.0772H5.25V9.5778H6.7503ZM10.4997 9.5778V11.0772H9.0003V9.5778H10.4997ZM14.25 9.5778V11.0772H12.7497V9.5778H14.25ZM5.2257 3.0672H2.55C2.47909 3.0672 2.40887 3.08117 2.34335 3.1083C2.27784 3.13544 2.21831 3.17522 2.16816 3.22536C2.11802 3.27551 2.07824 3.33504 2.05111 3.40055C2.02397 3.46607 2.01 3.53629 2.01 3.6072V5.7087L17.49 5.7213V3.6072C17.49 3.53629 17.476 3.46607 17.4489 3.40055C17.4218 3.33504 17.382 3.27551 17.3318 3.22536C17.2817 3.17522 17.2222 3.13544 17.1566 3.1083C17.0911 3.08117 17.0209 3.0672 16.95 3.0672H14.511V3.9033C14.511 4.07039 14.4446 4.23063 14.3265 4.34878C14.2083 4.46693 14.0481 4.5333 13.881 4.5333C13.7139 4.5333 13.5537 4.46693 13.4355 4.34878C13.3174 4.23063 13.251 4.07039 13.251 3.9033V3.0672H6.4857V3.8952C6.4857 4.06229 6.41933 4.22253 6.30118 4.34068C6.18303 4.45883 6.02279 4.5252 5.8557 4.5252C5.68861 4.5252 5.52837 4.45883 5.41022 4.34068C5.29207 4.22253 5.2257 4.06229 5.2257 3.8952V3.0672Z"
      fill="black"
    />
  </svg>
);

const IconApply = () => (
  <svg
    className="w-[8px] h-[8px] t:w-[10px] t:h-[10px] sd:w-[18px] sd:h-[18px]"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.46267 0.0215501C4.79764 -0.0682013 5.14194 0.130584 5.23169 0.465548L5.8416 2.74184C5.93135 3.0768 5.73257 3.4211 5.3976 3.51085C5.06264 3.60061 4.71834 3.40182 4.62859 3.06686L4.01867 0.790567C3.92892 0.455602 4.12771 0.111301 4.46267 0.0215501ZM10.5491 1.15085C10.7942 1.39616 10.794 1.79373 10.5487 2.03884L8.88096 3.70521C8.63565 3.95032 8.23808 3.95016 7.99297 3.70485C7.74786 3.45954 7.74802 3.06197 7.99334 2.81686L9.66107 1.15049C9.90638 0.905378 10.3039 0.905541 10.5491 1.15085ZM0.0216166 4.46106C0.111505 4.12613 0.455886 3.92749 0.790814 4.01738L3.06847 4.62865C3.40339 4.71854 3.60204 5.06292 3.51215 5.39785C3.42226 5.73278 3.07788 5.93142 2.74295 5.84153L0.465301 5.23026C0.130373 5.14037 -0.0682714 4.79599 0.0216166 4.46106ZM6.65832 6.43762C6.649 6.4345 6.639 6.43404 6.62944 6.43629C6.61988 6.43853 6.61114 6.4434 6.60419 6.45035C6.59725 6.45729 6.59238 6.46604 6.59013 6.4756C6.58788 6.48516 6.58834 6.49516 6.59146 6.50448L9.94759 16.5552C9.9493 16.5603 9.95093 16.5654 9.95249 16.5705C9.95584 16.5751 9.95994 16.5793 9.96466 16.5826C9.97375 16.5891 9.98468 16.5926 9.99586 16.5925C10.007 16.5924 10.0179 16.5887 10.0269 16.582C10.0358 16.5754 10.0425 16.566 10.0458 16.5553L10.0462 16.5539L11.4322 12.1347L11.4329 12.1325C11.4967 11.9316 11.6081 11.7492 11.7575 11.6006C11.9068 11.4523 12.0896 11.3421 12.2905 11.2795C12.2908 11.2794 12.291 11.2793 12.2913 11.2792L16.7072 9.89119C16.7179 9.88785 16.7272 9.88122 16.7338 9.87226C16.7405 9.8633 16.7441 9.85247 16.7442 9.84132C16.7443 9.83017 16.7409 9.81927 16.7344 9.81019C16.728 9.80114 16.7188 9.79436 16.7083 9.7908C16.7083 9.79079 16.7084 9.79082 16.7083 9.7908L6.65832 6.43762ZM12.4308 13.1471L11.2449 16.9283C11.2448 16.9286 11.2447 16.9289 11.2446 16.9293C11.1623 17.1934 10.9983 17.4247 10.7762 17.5898C10.5539 17.7551 10.2848 17.8456 10.0077 17.8482C9.73068 17.8508 9.45994 17.7654 9.23452 17.6044C9.00909 17.4433 8.84061 17.2148 8.75335 16.9518C8.74746 16.9341 8.74239 16.9161 8.73814 16.8981L5.40079 6.90365C5.40074 6.9035 5.40084 6.9038 5.40079 6.90365C5.32356 6.673 5.31199 6.42492 5.36767 6.18813C5.42339 5.95119 5.54409 5.73448 5.7162 5.56236C5.88832 5.39025 6.10503 5.26955 6.34197 5.21383C6.57879 5.15814 6.82644 5.16957 7.05712 5.24683C7.057 5.24679 7.05725 5.24687 7.05712 5.24683L17.1076 8.60016C17.3696 8.68805 17.597 8.85662 17.7573 9.08172C17.9176 9.30681 18.0026 9.57688 17.9999 9.8532C17.9973 10.1295 17.9073 10.3979 17.7428 10.62C17.5782 10.842 17.3476 11.0062 17.084 11.0891L13.3291 12.2694L17.3804 16.3195C17.6257 16.5647 17.6257 16.9623 17.3805 17.2075C17.1354 17.4528 16.7378 17.4528 16.4925 17.2076L12.4308 13.1471ZM3.70658 7.99333C3.95169 8.23865 3.95152 8.63621 3.70621 8.88132L2.03848 10.5477C1.79317 10.7928 1.3956 10.7926 1.15049 10.5473C0.905379 10.302 0.905541 9.90446 1.15085 9.65935L2.81859 7.99297C3.0639 7.74786 3.46146 7.74802 3.70658 7.99333Z"
      fill="#052039"
    />
  </svg>
);
