import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "./ContactForm";
import Image from "next/image";

export const metadata = {
  title: "Hello! Acgile",
  description:
    "Need accounting assistance? Acgile is here to help. Contact us for expert financial management powered by automation.",
  referrer: "origin-when-cross-origin",
};

const ContactPage = async () => {
  return (
    <>
      <AnimatedSection className="container mt-[50px] mb-[60px] t:mt-[60px] t:mb-[100px] sd:mt-[50px] sd:mb-[100px]">
        <div className="flex flex-col-reverse sd:grid grid-cols-[1fr_2fr] gap-[60px] t:gap-[80px] md:gap-[150px]">
          <div className="max-w-[280px] t:max-w-full mx-auto flex flex-col tMax:grid tMax:grid-cols-2 gap-[20px] t:gap-[40px] sd:gap-[50px] sd:mt-[100px]">
            <ContactItem
              title="Mobile:"
              icon="mobile"
              links={[
                {
                  text: "+92 51 8898653",
                  href: "tel:+92 51 8898653",
                },
              ]}
            />
            <ContactItem
              title="Email:"
              icon="email"
              links={[
                {
                  text: "careers@acgile.com",
                  href: "mailto:careers@acgile.com",
                },
              ]}
            />
            <ContactItem
              title="Address:"
              icon="location"
              links={[
                {
                  text: "Third Floor, Plot # 417/418, PWD Main Double Road, Block C, PWD HS, Islamabad, Pakistan",
                  href: "https://maps.app.goo.gl/CXX7hf7kJWDxh9gH9",
                },
              ]}
            />
          </div>
          <div
            id="form"
            className="shadow-[0_10px_20px_#00000003] border border-grey-cf rounded-[20px] t:rounded-[40px] sd:rounded-[60px] pt-[10px] px-[30px] t:pt-[15px] t:px-[50px] sd:pt-[30px] sd:px-[100px] pb-[50px]"
          >
            <div className="w-full text-center bg-[url(/form-title-bg.svg)] bg-no-repeat bg-contain bg-center py-[7px] t:py-[18px] sd:py-[2.6%] mb-[30px] t:mb-[40px] sd:mb-[35px]">
              <h1 className="text-[18px] t:text-[30px] sd:text-[clamp(30px,2.6vw,44px)] tracking-tight t:tracking-tighter">
                Get In Touch
              </h1>
            </div>
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ContactPage;

const ContactItem = ({ title, icon, links }) => {
  return (
    <div
      className={`flex gap-[20px] ${
        icon === "location" ? "tMax:col-span-full" : ""
      }`}
    >
      <div className="shrink-0 inline-flex items-center justify-center w-[60px] h-[60px] t:w-[80px] t:h-[80px] rounded-[16px] t:rounded-[25px] bg-[linear-gradient(153.43deg,#FAFCFE_17%,#EEF1F5_51.17%,#FAFCFE_82.83%)]">
        {icon === "mobile" && (
          <svg
            className="t:w-[32px] t:h-[31px]"
            width="24"
            height="23"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3232 19.2973L21.5143 20.0989C21.5143 20.0989 19.5889 22.0028 14.3356 16.8042C9.08235 11.6056 11.0077 9.70173 11.0077 9.70173L11.5161 9.19567C12.773 7.95353 12.8921 5.95762 11.7952 4.49961L9.55523 1.52167C8.19702 -0.283145 5.57482 -0.522017 4.01927 1.01738L1.22818 3.77769C0.458408 4.54208 -0.0571445 5.52942 0.0050773 6.62646C0.165076 9.43454 1.44151 15.4736 8.55969 22.5195C16.1099 29.99 23.1943 30.2872 26.0902 30.0183C27.0076 29.9333 27.804 29.4698 28.4458 28.8328L30.9702 26.3343C32.6769 24.6481 32.1969 21.7551 30.0138 20.5749L26.6182 18.7364C25.1854 17.9632 23.4431 18.1897 22.3232 19.2973Z"
              fill="#052039"
            />
          </svg>
        )}
        {icon === "email" && (
          <svg
            className="t:w-[32px] t:h-[26px]"
            width="24"
            height="19"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.937258 0.937258C1.53737 0.337142 2.35131 0 3.2 0H28.8C29.6487 0 30.4626 0.337142 31.0627 0.937258C31.6629 1.53737 32 2.35131 32 3.2V6.4L16 12.8L0 6.4V3.2C0 2.35131 0.337142 1.53737 0.937258 0.937258ZM0.937258 24.6622C0.337142 24.0621 0 23.2481 0 22.3994V9.59943L16 15.9994L32 9.59943V22.3994C32 23.2481 31.6629 24.0621 31.0627 24.6622C30.4626 25.2623 29.6487 25.5994 28.8 25.5994H3.2C2.35131 25.5994 1.53737 25.2623 0.937258 24.6622Z"
              fill="#052039"
            />
          </svg>
        )}
        {icon === "location" && (
          <svg
            className="t:w-[28px] t:h-[34px]"
            width="22"
            height="27"
            viewBox="0 0 28 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7193 0C17.3579 0 20.8474 1.47425 23.4203 4.09843C25.9932 6.72261 27.4386 10.2818 27.4386 13.9929C27.4386 19.9058 23.365 26.3497 15.3234 33.3936C14.8763 33.7854 14.3061 34.0005 13.7167 34C13.1272 33.9995 12.5574 33.7833 12.111 33.3907L11.5791 32.92C3.89347 26.0598 0 19.7738 0 13.9929C0 10.2818 1.44542 6.72261 4.01829 4.09843C6.59116 1.47425 10.0807 0 13.7193 0ZM13.7193 8.61103C12.3198 8.61103 10.9777 9.17805 9.98814 10.1873C8.99858 11.1966 8.44265 12.5656 8.44265 13.9929C8.44265 15.4203 8.99858 16.7892 9.98814 17.7985C10.9777 18.8078 12.3198 19.3748 13.7193 19.3748C15.1188 19.3748 16.4609 18.8078 17.4505 17.7985C18.44 16.7892 18.996 15.4203 18.996 13.9929C18.996 12.5656 18.44 11.1966 17.4505 10.1873C16.4609 9.17805 15.1188 8.61103 13.7193 8.61103Z"
              fill="#052039"
            />
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-[10px]">
        <h3 className="text-[16px] t:text-[22px]">{title}</h3>
        <p className="flex flex-col gap-[4px] t:gap-[8px]">
          {links.map((link, index) => (
            <a
              key={index}
              className={`link-hover-underline block text-[16px] t:text-[20px] leading-[1.4] ${
                link.icon
                  ? "mb-[16px] t:mb-[11px] sd:mb-[26px] first:t:mt-[5px] first:sd:mt-[15px]"
                  : ""
              }`}
              href={link.href}
              target={`${icon === "location" ? "_blank" : ""}`}
            >
              {link.icon && (
                <Image
                  className="w-[20px] t:w-[28px] mb-[10px]"
                  src={link.icon}
                  width={28}
                  height={17}
                  alt="Address Icon"
                />
              )}
              <span>{link.text}</span>
            </a>
          ))}
        </p>
      </div>
    </div>
  );
};
