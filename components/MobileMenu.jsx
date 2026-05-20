import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({
  menu,
  currentPath,
  setMobileMenuActive,
  categoryMenu,
}) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleMobileDropdown = (e, linkName) => {
    e.stopPropagation();
    e.preventDefault();
    setOpenDropdowns((prev) => ({
      [linkName]: !prev[linkName],
    }));
  };

  const toggleBlogCategories = (e, linkName) => {
    e.stopPropagation();
    e.preventDefault();
    setOpenDropdowns((prev) => ({
      ...prev,
      blogCategories: !prev.blogCategories,
      [linkName]: true,
    }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({});
  };

  const activeMenuItem = (link) => {
    if (link.name === "Resources") {
      return (
        currentPath.startsWith("/blogs") || currentPath.startsWith("/guide")
      );
    }

    if (link.path !== "#") {
      return (
        currentPath === link.path || currentPath.startsWith(`${link.path}/`)
      );
    }

    if (link.submenu) {
      return link.submenu.some(
        (subItem) =>
          subItem.path !== "#" &&
          (currentPath === subItem.path ||
            currentPath.startsWith(`${subItem.path}/`))
      );
    }

    return false;
  };

  const activeSubMenuItem = (item, parentLink) => {
    if (parentLink.name === "Resources") {
      if (item.name === "Blogs") {
        return currentPath.startsWith("/blogs");
      } else if (item.name === "Guide") {
        return currentPath.startsWith("/guide");
      }
    }
    return currentPath === item.path || currentPath.startsWith(`${item.path}/`);
  };

  return (
    <nav
      style={{ overflow: "auto" }}
      className="h-full container pb-[30px] border-b border-grey-e2"
    >
      <ul className="flex flex-col gap-[10px]">
        {menu.map((link, index) => {
          const active = activeMenuItem(link);
          const showBlogCategories =
            openDropdowns["blogCategories"] &&
            link.name === "Resources" &&
            openDropdowns[link.name];

          return (
            <li key={index}>
              <Link
                onClick={() => {
                  setMobileMenuActive(false);
                  closeAllDropdowns();
                }}
                href={link.path}
                className={`relative mobile-menu-item flex items-center gap-x-[5px] p-[20px] ${
                  openDropdowns[link.name] || showBlogCategories
                    ? "rounded-tl-[8px] rounded-tr-[8px] bg-white"
                    : "rounded-[8px]"
                } smooth ${active ? "bg-white" : ""} hover:bg-white
                before:inline-block before:bg-grey-e2 before:w-[5px] before:h-[5px] before:rounded-full before:transition-bg before:duration-200
                hover:text-black hover:border-grey-eb hover:before:bg-grey-97
                ${
                  active
                    ? "text-black font-semibold bg-white before:bg-primary hover:before:bg-primary"
                    : "text-grey-97 border-transparent"
                }`}
              >
                {link.name}
                {link.submenu && (
                  <span
                    onClick={(e) => handleMobileDropdown(e, link.name)}
                    className="absolute right-0 top-0 bottom-0 px-[20px] rounded-[8px] inline-flex justify-center items-center"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`smooth ${
                        openDropdowns[link.name] ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <path
                        d="M1 6.5L6 1.5L11 6.5"
                        stroke="#1C354C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Link>

              {link.submenu && openDropdowns[link.name] && (
                <nav
                  className={`smooth grid ${
                    openDropdowns[link.name]
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <ul
                    className={`flex flex-col gap-[5px] smooth overflow-hidden bg-white rounded-bl-[8px] rounded-br-[8px] px-[12px] pb-[20px]`}
                  >
                    {link.submenu.map((item, innerIndex) => {
                      const active = activeSubMenuItem(item, link);
                      const isBlogItem = item.name === "Blogs";

                      return (
                        <div key={innerIndex} className="relative">
                          <Link
                            onClick={() => {
                              if (!isBlogItem) {
                                setMobileMenuActive(false);
                                closeAllDropdowns();
                              }
                            }}
                            className={`relative flex flex-col px-[20px] py-[12px] border-l-2 rounded-[5px] hover:bg-grey-fe border-l-transparent hover:text-secondary hover:border-l-secondary smooth ${
                              active || (isBlogItem && showBlogCategories)
                                ? "bg-grey-fe text-secondary border-l-secondary"
                                : "border-l-transparent"
                            }`}
                            href={item.path}
                          >
                            {item.name}
                            {isBlogItem && (
                              <span
                                onClick={(e) =>
                                  toggleBlogCategories(e, link.name)
                                }
                                className="absolute right-0 top-0 bottom-0 px-[20px] rounded-[8px] inline-flex justify-center items-center"
                              >
                                <svg
                                  width="12"
                                  height="8"
                                  viewBox="0 0 12 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`smooth ${
                                    showBlogCategories
                                      ? "rotate-0"
                                      : "rotate-180"
                                  }`}
                                >
                                  <path
                                    d="M1 6.5L6 1.5L11 6.5"
                                    stroke="#1C354C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            )}
                          </Link>

                          {isBlogItem && showBlogCategories && (
                            <div className="pl-[5px]">
                              {categoryMenu?.map((category, catIndex) => (
                                <Link
                                  key={catIndex}
                                  onClick={() => {
                                    setMobileMenuActive(false);
                                    closeAllDropdowns();
                                  }}
                                  href={`/category/${category.slug}`}
                                  className={`block ml-[5px] px-[20px] py-[12px] rounded-[5px] hover:bg-grey-fe hover:text-secondary smooth ${
                                    currentPath.startsWith(
                                      `/category/${category.slug}`
                                    )
                                      ? "bg-grey-fe text-secondary"
                                      : ""
                                  }`}
                                >
                                  {category.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileMenu;
