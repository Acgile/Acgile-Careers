import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank You | Acgile",
  robots: {
    index: false,
    follow: false,
  },
};

const ThankYou = () => {
  return (
    <AnimatedSection className="container my-[55px] t:my-[75px] sd:mt-[50px] sd:mb-[90px] flex flex-col items-center">
      <SectionTitle
        caption="Cheers!"
        title={["We Appreciate Your", "Interest"]}
        description="Thank you for submitting the form! Your information has been sent
        successfully, and our team at Acgile will review it shortly. We look
        forward to connecting with you soon."
        descriptionClasses="max-w-[820px] mb-[50px] t:mb-[70px] sd:mb-[100px]"
      />
      <Image
        src="/thank-you-illustration.webp"
        width="800"
        height="700"
        alt="Thank you"
        className="mb-[40px] sd:mb-[80px]"
      />

      <Link
        className={`px-[25px] py-[16px] relative overflow-hidden transition-all ease-in-out duration-200 items-center justify-center gap-x-[10px] rounded-full font-semibold bg-primary  text-white shadow-[0_12px_26px_#0028570D,inset_0_-4px_7px_#00415E1F] before:transition before:duration-500 before:w-[50px] before:h-[50px] before:absolute before:left-[5px] before:top-1/2 before:transform before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-[#15c1fc] hover:before:scale-[7] flex`}
        href="/"
      >
        <svg
          className="shrink-0 relative z-10"
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.22347 10.4749C5.91271 10.7857 5.40887 10.7857 5.09811 10.4749L-0.000147332 5.37669L5.0981 0.278434C5.40887 -0.0323285 5.91271 -0.0323286 6.22347 0.278434C6.53423 0.589194 6.53423 1.09304 6.22347 1.4038L2.25059 5.37669L6.22347 9.34957C6.53423 9.66033 6.53423 10.1642 6.22347 10.4749Z"
            fill="white"
          />
        </svg>

        <span className="relative z-10">Back To Home</span>
      </Link>
    </AnimatedSection>
  );
};

export default ThankYou;
