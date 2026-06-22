"use client";
import AnimatedButton from "@/components/AnimatedButton";
import ClutchBadge from "@/components/ClutchBadge";
import UpworkBadge from "@/components/UpworkBadge";
import GoogleBadge from "@/components/GoogleBadge";
// 1. Import icons from their correct package sub-directories
import { TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube,FaInstagram  } from "react-icons/fa";

import {
  footerMenuLinks,
  footerServicesLinks,
  footerSocialLinks,
} from "@/lib/localData";
import Image from "next/image";
import Link from "next/link";


// Create a local map dictionary
const iconMap = {
  linkedin: TiSocialLinkedin,
  instagram: FaInstagram ,
  twitter: RiTwitterXFill,
  facebook: TiSocialFacebook,
  youtube: FaYoutube,
};

const Footer = () => {
  const contactRef = "/contact";

  return (
    <footer className="bg-grey-fe border-t border-grey-eb">
      <div className="container pt-[30px] pb-[15px] t:pb-[10px] sd:py-[60px] grid grid-cols-1 t:grid-cols-3 sd:grid-cols-[4fr_3fr_2fr_2fr] gap-[20px] t:gap-[30px] sd:gap-[50px] ld:gap-[100px]">
        {/* Introduction Column */}
        <div className="t:col-span-3 sd:col-span-1 flex flex-col items-center sd:items-start sd:gap-y-[50px] flex-1 t:max-w-[590px] sd:max-w-full mx-auto">
          <Link href="/">
            <Image
              className="w-[140px] sd:w-[250px] mb-[20px] sd:mb-0"
              src="/acgile-logo.svg"
              alt="Acgile Logo"
              width={250}
              height={72}
            />
          </Link>
          <p className="text-[14px] sd:text-[20px] text-center text-grey-5f sd:text-left max-w-[850px] mb-[20px] sd:mb-[24px]">
            Founded in 2017, Acgile has evolved into a trusted partner, offering
            end-to-end accounting and bookkeeping solutions to thriving
            businesses worldwide.
          </p>
          <div className=" flex flex-col sd:flex-row justify-between items-center pb-[20px] t:pb-[25px] sd:pb-[20px]">
        {/* <div className="hidden sd:block">
          <AnimatedButton title="Get A Free Quote" link={contactRef} />
        </div> */}
        <nav className="relative flex flex-row flex-wrap items-center gap-x-[10px] gap-y-[10px] mb-[15px] t:mb-[10px] sd:mb-0 sd:ml-auto">
          {footerSocialLinks
            .filter((link) => link.link !== "")
            .map((link, index) => {
              const IconComponent = iconMap[link.iconKey];

              return (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="smooth bg-[#0076A5] w-[40px] h-[40px] p-[5px] flex justify-center items-center rounded-[3px] hover:bg-gradient-to-b hover:from-[#0177A4] hover:to-[#002D3E] hover:shadow-[inset_0_0_10.4px_0px_#007FB1]"
                >
                  <IconComponent
                    className={`${link.style} text-white hover:text-white`}
                  />
                </a>
              );
            })}
        </nav>

      </div>
          {/* Mobile CTA */}
          {/* <div className="flex flex-col items-center gap-[20px] w-full justify-center border-b border-grey-f5 pb-[30px] t:pb-[40px] sd:hidden mb-[10px]">
            <AnimatedButton title="Get A Free Quote" link={contactRef} />
          </div> */}
        </div>

        {/* Services Column */}
        <div className="shrink-0 text-center t:text-left">
          <h3 className="text-[16px] sd:text-[24px] text-secondary font-semibold mb-[20px] sd:mb-[28px]">
            Services
          </h3>
          <nav className="grid grid-cols-2 gap-x-[16px] sd:gap-x-[28px] gap-y-[6px] sd:gap-y-[15px] justify-items-center t:justify-items-start">
            {footerServicesLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="link-hover-underline text-[12px] sd:text-base text-grey-5f smooth whitespace-nowrap"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Useful Links Column */}
        <div className="shrink-0 text-center t:text-left">
          <h3 className="text-[16px] sd:text-[24px] text-secondary font-semibold mb-[20px] sd:mb-[28px]">
            Useful Links
          </h3>
          <nav className="flex flex-col gap-y-[6px] sd:gap-y-[15px] items-center t:items-start">
            {footerMenuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="link-hover-underline text-[12px] sd:text-base text-grey-5f smooth"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Column */}
        <div className="shrink-0 text-center t:text-left">
          <h3 className="text-[16px] sd:text-[24px] text-secondary font-semibold mb-[20px] sd:mb-[28px]">
            Get In Touch
          </h3>
          <table className="border-collapse text-secondary mx-auto t:mx-0">
            <tbody>
              <tr>
                <th className="text-left text-[12px] sd:text-base pr-[5px] sd:pr-[10px] pb-[10px] sd:pb-[15px] whitespace-nowrap font-bold">
                  Phone PK:
                </th>
                <td className="pb-[10px] sd:pb-[15px]">
                  <a
                    className="text-[12px] sd:text-base link-hover-underline smooth"
                    href="tel:+92518898653"
                  >
                    <span>+92 51 8898653</span>
                  </a>
                </td>
              </tr>
              <tr>
                <th className="text-left text-[12px] sd:text-base pr-[5px] sd:pr-[10px] pb-[10px] sd:pb-[15px] whitespace-nowrap font-bold">
                  Phone US:
                </th>
                <td className="pb-[10px] sd:pb-[15px]">
                  <a
                    className="text-[12px] sd:text-base link-hover-underline smooth"
                    href="tel:+1(657)443-3113"
                  >
                    <span>+1(657)443-3113</span>
                  </a>
                </td>
              </tr>
              <tr>
                <th className="text-left text-[12px] sd:text-base pr-[5px] sd:pr-[10px] pb-[10px] sd:pb-[15px] align-top font-bold">
                  Email:
                </th>
                <td className="pb-[10px] sd:pb-[15px]">
                  <a
                    className="text-[12px] sd:text-base link-hover-underline underline-secondary text-primary font-semibold block smooth hover:text-secondary"
                    href="mailto:contact@acgile.com"
                  >
                    <span>contact@acgile.com</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-wrap justify-center items-center gap-[14px] sd:gap-[20px] mb-[40px] t:mb-[50px] sd:mb-[60px]">
            <ClutchBadge />
            <UpworkBadge variant="personal" />
            <UpworkBadge variant="agency" />
            <GoogleBadge />
          </div>
        </div>
      </div>

      {/* Bottom bar: CTA + Social Links */}
      

      {/* Copyright */}
      <p className="container text-center text-[10px] sd:text-base pb-[30px]">
        <Link className="link-hover-underline" href="/">
          <span>acgile.com</span>
        </Link>{" "}
        © Copyright {new Date().getFullYear()} | All rights reserved |{" "}
        <Link
          className="block t:inline link-hover-underline"
          href="/privacy-policy"
        >
          <span>Privacy Policy</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
