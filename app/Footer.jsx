import AnimatedButton from "@/components/AnimatedButton";
import {
  footerMenuLinks,
  footerServicesLinks,
  footerSocialLinks,
} from "@/lib/localData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-grey-fe border-t border-grey-eb">
      <div className="container pt-[30px] pb-[15px] t:pb-[10px] sd:py-[60px] grid grid-cols-1 sd:grid-cols-[4fr_2fr_2fr_2fr] gap-[30px] md:gap-[50px] ld:gap-[130px]">
        {/* Introduction Column */}
        <div className="flex flex-col items-center sd:items-start sd:gap-y-[50px] flex-1 t:max-w-[590px] sd:max-w-full mx-auto">
          <Link href="https://acgile.com">
            <Image
              className="w-[140px] sd:w-[250px] mb-[20px] sd:mb-0"
              src="/acgile-logo.svg"
              alt="Acgile Logo"
              width={250}
              height={72}
            />
          </Link>
          <p className="text-[14px] sd:text-[20px] text-center text-grey-5f sd:text-left max-w-[850px] mb-[30px] sd:mb-0">
            Founded in 2017, Acgile has evolved into a trusted partner, offering
            end-to-end accounting and bookkeeping solutions to thriving
            businesses worldwide.
          </p>
          <div className="flex flex-col items-center gap-[20px] w-full justify-center border-b border-grey-f5 pb-[30px] t:pb-[40px] sd:hidden mb-[30px]">
            <AnimatedButton title="Contact Us" link={`/contact`} />
          </div>

          {/* 2ndColumn For Mobile */}
          <div className="flex flex-col items-center t:items-start t:grid t:grid-cols-3 justify-between w-full gap-[20px] t:gap-[50px] sd:hidden mb-[20px]">
            <div className="shrink-0">
              <h3 className="text-center t:text-left text-[16px] text-secondary font-semibold mb-[20px]">
                Services
              </h3>
              <nav className="flex flex-col gap-y-[6px] sd:gap-y-[15px]">
                {footerServicesLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="text-center t:text-left link-hover-underline text-[12px] text-grey-5f transition-all ease-in-out duration-200 "
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="shrink-0">
              <h3 className="text-center t:text-left text-[16px] text-secondary font-semibold mb-[20px]">
                Useful Links
              </h3>
              <nav className="flex flex-col gap-y-[6px] sd:gap-y-[15px]">
                {footerMenuLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="text-center t:text-left link-hover-underline text-[12px] text-grey-5f transition-all ease-in-out duration-200 "
                  >
                    <span className="inline-block overflow-hidden ">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="shrink-0">
              <h3 className="text-center t:text-left text-[16px] text-secondary font-semibold mb-[20px]">
                Get In Touch
              </h3>
              <table className="border-collapse text-secondary">
                <tbody>
                  <tr>
                    <th className="text-left text-[12px] pr-[5px] pb-[10px] whitespace-nowrap">
                      Phone PK:
                    </th>
                    <td className="pb-[10px]">
                      <a
                        className="text-[12px] link-hover-underline  transition-all ease-in-out duration-200"
                        href="tel:+92518898653"
                      >
                        <span>+92 51 8898653</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left text-[12px] pr-[5px] pb-[10px] whitespace-nowrap">
                      Phone US:
                    </th>
                    <td className="pb-[10px]">
                      <a
                        className="text-[12px] link-hover-underline  transition-all ease-in-out duration-200"
                        href="tel:+1(720)443-3113"
                      >
                        <span>+1(720)443-3113</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left text-[12px] pr-[5px] pb-[10px] align-top">
                      Email:
                    </th>
                    <td className="pb-[10px]">
                      <a
                        className="text-[12px] text-primary font-semibold block mb-[10px] transition-all ease-in-out duration-200 hover:text-secondary"
                        href="mailto:hr@acgile.com"
                      >
                        careers@acgile.com
                      </a>
                      <a
                        className="text-[12px] text-primary font-semibold block transition-all ease-in-out duration-200 hover:text-secondary"
                        href="mailto:zain@acgile.com"
                      >
                        zain@acgile.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Social Links - For Mobile */}
          <nav className="w-full flex justify-center sd:hidden gap-x-[10px] mt-[0px] pb-[25px] t:pb-[35px] mb-[15px] t:mb-[10px] border-b border-grey-f5">
            {footerSocialLinks
              .filter((link) => link.link !== "")
              .map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  className="transition-all ease-in-out duration-200 hover:-translate-y-1"
                >
                  <Image
                    src={link.icon}
                    alt={`${link.name} Link`}
                    width={23}
                    height={23}
                  />
                </a>
              ))}
          </nav>
        </div>

        {/* Services Column - For Desktop */}
        <div className="hidden sd:block shrink-0">
          <h3 className="text-[24px] text-secondary font-semibold mb-[28px]">
            Services
          </h3>
          <nav className="flex flex-col gap-y-[6px] sd:gap-y-[15px] items-start">
            {footerServicesLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className=" link-hover-underline inline-block text-base text-grey-5f transition-all ease-in-out duration-200 "
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Useful Links Column - For Desktop */}
        <div className="hidden sd:block shrink-0">
          <h3 className="text-[24px] text-secondary font-semibold mb-[28px]">
            Useful Links
          </h3>
          <nav className="flex flex-col gap-y-[6px] sd:gap-y-[15px]">
            {footerMenuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className=" link-hover-underline text-base text-grey-5f transition-all ease-in-out duration-200 "
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Column */}
        <div className="hidden sd:block shrink-0">
          <h3 className="text-[24px] text-secondary font-semibold mb-[28px]">
            Get In Touch
          </h3>
          <table className="border-collapse text-secondary">
            <tbody>
              <tr>
                <td className="pr-[10px] pb-[15px] min-w-[105px]">
                  <strong>Phone PK: </strong>
                </td>
                <td className="pb-[15px]">
                  <a
                    className="link-hover-underline transition-all ease-in-out duration-200"
                    href="tel:+92518898653"
                  >
                    <span>+92 51 8898653</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-[10px] pb-[15px] min-w-[105px]">
                  <strong>Phone US: </strong>
                </td>
                <td className="pb-[15px]">
                  <a
                    className="link-hover-underline  transition-all ease-in-out duration-200"
                    href="tel:+1(720)443-3113"
                  >
                    <span>+1(720)443-3113</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-[10px] pb-[15px] min-w-[105px] align-top">
                  <strong>Email: </strong>
                </td>
                <td className="pb-[15px]">
                  <a
                    className="link-hover-underline underline-secondary text-primary font-semibold block mb-[7px] transition-all ease-in-out duration-200 hover:text-secondary "
                    href="mailto:hr@acgile.com"
                  >
                    <span>careers@acgile.com</span>
                  </a>
                  <a
                    className="link-hover-underline underline-secondary text-primary font-semibold block transition-all ease-in-out duration-200 hover:text-secondary "
                    href="mailto:zain@acgile.com"
                  >
                    <span>zain@acgile.com</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="hidden container sd:flex justify-between items-center pb-[90px]">
        <AnimatedButton title="Contact Us" link={`/contact`} />
        <nav className="flex gap-x-[10px]">
          {footerSocialLinks.map(
            (link, index) =>
              link.link !== "" && (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  className="transition-all ease-in-out duration-200 hover:-translate-y-1"
                >
                  <Image
                    src={link.icon}
                    alt={`${link.name} Link`}
                    width={30}
                    height={30}
                  ></Image>
                </a>
              )
          )}
        </nav>
      </div>
      <p className="container text-center text-[10px] sd:text-base pb-[30px]">
        <Link className="link-hover-underline" href="https://acgile.com">
          <span>acgile.com</span>
        </Link>{" "}
        © Copyright 2024 | All rights reserved |{" "}
        <Link
          className="block t:inline link-hover-underline"
          href="https://acgile.com/privacy-policy"
        >
          <span>Privacy Policy</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
