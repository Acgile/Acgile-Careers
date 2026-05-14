import { getJobData } from "@/lib/utils";
import JobCard from "./JobCard";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const JobsList = async () => {
  const jobsData = await getJobData();

  if (!jobsData || jobsData.jobs.nodes.length === 0) {
    return (
      <div className="flex flex-col items-center max-w-[1344px] m-auto sd:flex-row sd:gap-[100px] sd:justify-between">
        <div>
          <h2 className="tracking-tight text-center sd:text-left text-[18px] t:text-[22px] sd:text-[34px] mb-[10px] sd:mb-[20px]">
            There is no open position for now
          </h2>
          <p className="text-[12px] t:text-[14px] sd:text-[16px] text-grey-97 text-center sd:text-left m-auto sd:m-0 mb-[20px] t:mb-[40px] sd:mb-0 max-w-[500px]">
            Although we currently have no job openings, we are always interested
            in connecting with talented individuals for future opportunities.
            Stay tuned for updates or reach out to us directly to express your
            interest.
          </p>
        </div>
        <Image
          className="w-[216px] t:w-[340px] sd:w-[500px] h-auto"
          src="/no-job-available.svg"
          width={800}
          height={630}
          alt="No Jobs Available Right Now at Acgile"
        />
      </div>
    );
  }
  return (
    <div className="max-w-[1344px] mx-auto">
      <SectionTitle
        caption="Purpose Driven Roles"
        title={["Current", "Openings"]}
        description="Join Acgile for a career that offers dynamic growth opportunities, a collaborative culture, and innovative solutions in the accounting and financial services industry."
        descriptionClasses="max-w-[620px] sd:max-w-[770px] mb-[30px] sd:mb-[60px]"
      />
      <div className="flex flex-col gap-[30px] sd:gap-[40px] mt-[30px] sd:mt-[60px]">
        {jobsData.jobs.nodes.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
