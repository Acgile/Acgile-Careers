"use client";
import Image from "next/image";
import logo from "@/public/acgile-logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useLayoutEffect } from "react";
import { throttle } from "lodash";
import DropdownMenu from "@/components/DropdownMenu";
import { mainMenu } from "@/lib/localData";
import MobileMenu from "@/components/MobileMenu";
const Header = () => {
  const currentPath = usePathname();
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const activeMenuItem = (link, currentPath) => {
    if (link.name === "Resources")
      return (
        currentPath.startsWith("/blogs") || currentPath.startsWith("/guide")
      );
    if (link.path !== "#")
      return (
        currentPath === link.path || currentPath.startsWith(`${link.path}/`)
      );
    if (link.submenu)
      return link.submenu.some(
        (subItem) =>
          subItem.path !== "#" &&
          (currentPath === subItem.path ||
            currentPath.startsWith(`${subItem.path}/`))
      );
    return false;
  };

  const handleMobileMenu = () => {
    setMobileMenuActive((prev) => !prev);
  };

  const [stickyActive, setStickyActive] = useState(false);

  const handleStick = useCallback(
    throttle(() => {
      const isSticky = window.scrollY > 0;
      if (isSticky !== stickyActive) {
        setStickyActive(isSticky);
      }
    }, 300),
    [stickyActive]
  );

  useLayoutEffect(() => {
    handleStick();
    window.addEventListener("scroll", handleStick);
    return () => window.removeEventListener("scroll", handleStick);
  }, [handleStick]);

  const handleMouseEnter = (linkName) => {
    setActiveDropdown(linkName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] ${
          mobileMenuActive ? "bg-white" : "bg-white/80"
        } backdrop-blur-[14px] before:w-full before:h-[1px] before:bg-grey-f5 before:absolute before:bottom-0`}
      >
        <div
          style={{ overflow: "visible" }}
          className={`relative z-10 container flex justify-between items-center gap-x-[50px] ${
            stickyActive
              ? " py-[10px] t:py-[15px]"
              : "py-[15px] t:py-[20px] sd:py-[30px]"
          } transition-all duration-75 ease-linear"`}
        >
          <Link href="https://acgile.com">
            <Image
              src={logo}
              alt="Acgile Logo"
              width={200}
              height={57}
              className={`hidden sd:block transition-all duration-75 ease-linear ${
                stickyActive ? "scale-[0.76]" : "scale-100"
              } origin-left`}
              priority
            />
            <Image
              src={logo}
              alt="Acgile Logo"
              width={120}
              height={34}
              className={`sd:hidden transition-all duration-75 ease-linear ${
                stickyActive ? "w-[105px] h-[29px]" : "w-[120px] h-[34px]"
              }`}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav>
            <ul className="items-center gap-x-[10px] p-[10px] bg-white/50 border border-grey-f5 rounded-full shadow-[0_3px_1px_#] hidden sd:flex">
              {mainMenu.map((link, index) => {
                const active = activeMenuItem(link, currentPath);
                return (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() =>
                      link.submenu && handleMouseEnter(link.name)
                    }
                    onMouseLeave={() => link.submenu && handleMouseLeave()}
                  >
                    <Link
                      href={link.path}
                      className={`flex items-center gap-x-[5px] text-[18px] leading-[22px] px-[16px] py-[12px] rounded-[50px] border smooth 
                  before:inline-block before:bg-grey-e2 before:w-[5px] before:h-[5px] before:rounded-full before:transition-bg before:duration-200
                  hover:text-black hover:border-grey-eb hover:before:bg-grey-97
                  hover:shadow-[0_2px_2px_#05203914,inset_0_-3px_5px_#0520390D] 
                  ${
                    active
                      ? "text-black font-semibold border-grey-eb before:bg-primary shadow-[0_2px_2px_#05203914,inset_0_-3px_5px_#0520390D]"
                      : "text-grey-97 border-transparent"
                  } 
                `}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <DropdownMenu
                        menu={link.submenu}
                        parentLink={link}
                        isOpen={activeDropdown === link.name}
                        onClose={closeDropdown}
                        categoryMenu={
                          link.name === "Resources"
                            ? link.submenu.find((item) => item.name === "Blogs")
                                ?.categoryMenu || []
                            : []
                        }
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            className={`px-[25px] py-[16px] relative overflow-hidden smooth items-center justify-center gap-x-[10px] rounded-full font-semibold bg-primary  text-white shadow-[0_12px_26px_#0028570D,inset_0_-4px_7px_#00415E1F] before:transition before:duration-500 before:w-[50px] before:h-[50px] before:absolute before:left-[5px] before:top-1/2 before:transform before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-[#15c1fc] hover:before:scale-[5] hidden sd:inline-flex`}
            href={`/contact${
              currentPath !== "/contact" && currentPath !== "/thank-you"
                ? `?ref=${
                    currentPath === "/" ? "home" : currentPath.split("/").at(-1)
                  }`
                : ""
            }`}
          >
            <PhoneIcon />
            <span className="relative z-10">Contact</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={handleMobileMenu}
            className="flex items-center justify-center rounded-full bg-white/10 border border-grey-eb hover:bg-primary hover:border-primary sd:hidden 
            w-[40px] h-[40px] t:w-[45px] t:h-[45px] group smooth"
          >
            <svg
              className="t:w-[18px] t:h-[12px]"
              width={16}
              height={10}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 14"
            >
              <path
                className="stroke-[#1C354C] group-hover:stroke-white smooth"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h18M1 7h18M1 13h18"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Wrap */}
      <div
        className={`mobile-menu-wrap p-[10px] flex flex-col fixed ${
          stickyActive ? "pt-[81px]" : "pt-[95px]"
        } left-0 ${
          mobileMenuActive
            ? "top-0 visible opacity-100 blur-0"
            : "top-[-50px] opacity-0 invisible blur-lg"
        } z-[999] w-full h-screen bg-grey-f5 backdrop-blur-[14px] sd:hidden transition-all duration-200 ease-in`}
      >
        <MobileMenu
          menu={mainMenu}
          currentPath={currentPath}
          setMobileMenuActive={setMobileMenuActive}
          categoryMenu={
            mainMenu
              .find((link) => link.name === "Resources")
              ?.submenu?.find((item) => item.name === "Blogs")?.categoryMenu ||
            []
          }
        />
        <div className="flex items-center justify-center pt-[40px] pb-[30px]">
          <Link
            onClick={() => setMobileMenuActive(false)}
            className={`mobile-menu-item px-[25px] py-[16px] relative overflow-hidden smooth inline-flex items-center justify-center gap-x-[10px] rounded-full font-semibold bg-primary  text-white shadow-[0_12px_26px_#0028570D,inset_0_-4px_7px_#00415E1F] before:transition before:duration-500 before:w-[50px] before:h-[50px] before:absolute before:left-[5px] before:top-1/2 before:transform before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-[#15c1fc] hover:before:scale-[5] sd:hidden`}
            href={`/contact${
              currentPath !== "/contact" && currentPath !== "/thank-you"
                ? `?ref=${
                    currentPath === "/" ? "home" : currentPath.split("/").at(-1)
                  }`
                : ""
            }`}
          >
            <PhoneIcon />
            <span className="relative z-10">Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

const PhoneIcon = () => (
  <svg
    className="shrink-0 relative z-10"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1616 9.69414L10.7571 10.0968C10.7571 10.0968 9.79447 11.0532 7.16782 8.4417C4.54117 5.83017 5.50384 4.87373 5.50384 4.87373L5.75806 4.61951C6.3865 3.99551 6.44605 2.99285 5.89761 2.26041L4.77762 0.764421C4.09851 -0.14224 2.78741 -0.262239 2.00964 0.51109L0.61409 1.89775C0.229204 2.28174 -0.0285723 2.77774 0.00253865 3.32885C0.0825381 4.73951 0.720756 7.77326 4.27984 11.3128C8.05493 15.0657 11.5971 15.215 13.0451 15.0799C13.5038 15.0372 13.902 14.8043 14.2229 14.4843L15.4851 13.2292C16.3384 12.3821 16.0984 10.9288 15.0069 10.3359L13.3091 9.41236C12.5927 9.02392 11.7216 9.1377 11.1616 9.69414Z"
      fill="#FBFCFD"
    />
  </svg>
);
