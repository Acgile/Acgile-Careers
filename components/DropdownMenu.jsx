"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DropdownMenu = ({ menu, parentLink, isOpen, onClose, categoryMenu }) => {
  const currentPath = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  const showBlogCategories = hoveredItem?.name === "Blogs1";
  const showCaseStudies = hoveredItem?.name === "Case Studies1";
  const showSubCategories = showBlogCategories || showCaseStudies;
  const columns = menu.length < 6 ? 1 : 2;
  const needsCategoryColumns = categoryMenu?.length > 7;
  const dropdownWidth = showBlogCategories
    ? needsCategoryColumns
      ? 800
      : 540
    : showCaseStudies
    ? 540
    : columns * 285;

  const isSubMenuItemActive = (item) => {
    if (parentLink.name === "Resources") {
      if (item.name === "Blogs") {
        return currentPath.startsWith("/blogs") || showBlogCategories;
      } else if (item.name === "Guide") {
        return currentPath.startsWith("/guide");
      } else if (item.name === "Case Studies") {
        return currentPath.startsWith("/case-studies") || showCaseStudies;
      }
    }
    return currentPath === item.path || currentPath.startsWith(`${item.path}/`);
  };

  const handleMouseEnterItem = (item) => {
    setHoveredItem(item);
  };

  const handleLinkClick = () => {
    onClose();
    setHoveredItem(null);
  };

  return (
    <div
      className={`absolute z-[1000] top-[48px] left-1/2 -translate-x-1/2 transition-all duration-200 ease-out ${
        isOpen
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 translate-y-[20px]"
      }`}
    >
      <span className="dropdown-menu-tip"></span>
      <nav
        style={{ width: `${dropdownWidth}px` }}
        className={`mt-[16px] ${
          showSubCategories || columns > 1
            ? "grid grid-cols-2 gap-x-[25px] before:bg-grey-f5 before:w-[1px] before:absolute before:top-[30px] before:bottom-[12px] before:left-1/2 before:-translate-x-1/2 before:z-10 smooth"
            : "flex flex-col gap-[5px] smooth"
        } text-[14px] bg-white border border-grey-f5 shadow-[0_8px_22px_#0520390D] rounded-[7px] p-[12px]`}
      >
        {showSubCategories ? (
          <>
            <div className="flex flex-col gap-[5px]">
              {menu.map((item, index) => (
                <SubMenuLink
                  key={index}
                  item={item}
                  active={
                    isSubMenuItemActive(item) ||
                    (item.name === "Blogs" && showBlogCategories) ||
                    (item.name === "Case Studies" && showCaseStudies)
                  }
                  onMouseEnter={() => handleMouseEnterItem(item)}
                  onClick={handleLinkClick}
                  forceActive={
                    (item.name === "Blogs" && showBlogCategories) ||
                    (item.name === "Case Studies" && showCaseStudies)
                  }
                />
              ))}
            </div>

            {showCaseStudies ? (
              <div className="flex flex-col gap-[5px]">
                {hoveredItem.categoryMenu.map((cs, index) => (
                  <Link
                    key={index}
                    href={`/case-studies/${cs.slug}`}
                    className={`relative font-medium text-[14px] leading-[20px] ${cs.extra} flex flex-col px-[5px] py-[10px] rounded-[5px] hover:bg-grey-fe hover:text-secondary smooth ${
                      currentPath === `/case-studies/${cs.slug}` ? "bg-grey-fe text-secondary" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnterItem(hoveredItem)}
                    onClick={handleLinkClick}
                  >
                    {cs.name}
                  </Link>
                ))}
              </div>
            ) : (
              <div
                className={`${
                  needsCategoryColumns
                    ? "grid grid-cols-2 gap-x-[25px]"
                    : "flex flex-col"
                } gap-y-[5px]`}
              >
                {needsCategoryColumns ? (
                  <>
                    <div className="flex flex-col gap-[5px]">
                      {categoryMenu.slice(0, 7).map((category, index) => (
                        <CategoryLink
                          key={index}
                          category={category}
                          currentPath={currentPath}
                          menu={menu}
                          handleMouseEnterItem={handleMouseEnterItem}
                          onClick={handleLinkClick}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      {categoryMenu.slice(7).map((category, index) => (
                        <CategoryLink
                          key={index + 7}
                          category={category}
                          currentPath={currentPath}
                          menu={menu}
                          handleMouseEnterItem={handleMouseEnterItem}
                          onClick={handleLinkClick}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  categoryMenu.map((category, index) => (
                    <CategoryLink
                      key={index}
                      category={category}
                      currentPath={currentPath}
                      menu={menu}
                      handleMouseEnterItem={handleMouseEnterItem}
                      onClick={handleLinkClick}
                    />
                  ))
                )}
              </div>
            )}
          </>
        ) : menu.length < 6 ? (
          <div className="flex flex-col gap-[5px]">
            {menu.map((item, index) => (
              <SubMenuLink
                key={index}
                item={item}
                active={isSubMenuItemActive(item)}
                onMouseEnter={() => handleMouseEnterItem(item)}
                onClick={handleLinkClick}
              />
            ))}
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-[5px]">
              {menu
                .filter((item, index) => index < 7)
                .map((item, index) => (
                  <SubMenuLink
                    key={index}
                    item={item}
                    active={isSubMenuItemActive(item)}
                    onMouseEnter={() => handleMouseEnterItem(item)}
                    onClick={handleLinkClick}
                  />
                ))}
            </div>
            <div className="flex flex-col gap-[5px]">
              {menu
                .filter((item, index) => index >= 7)
                .map((item, index) => (
                  <SubMenuLink
                    key={index}
                    item={item}
                    active={isSubMenuItemActive(item)}
                    onMouseEnter={() => handleMouseEnterItem(item)}
                    onClick={handleLinkClick}
                  />
                ))}
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

const CategoryLink = ({
  category,
  currentPath,
  menu,
  handleMouseEnterItem,
  onClick,
}) => {
  const isActive = currentPath.startsWith(`https://acgile.com/category/${category.slug}`);

  return (
    <Link
      href={`https://acgile.com/category/${category.slug}`}
      className={`relative font-medium text-[14px] leading-[20px] flex flex-col px-[15px] py-[10px] rounded-[5px] hover:bg-grey-fe hover:text-secondary smooth ${
        isActive ? "bg-grey-fe text-secondary" : ""
      }`}
      onMouseEnter={() =>
        handleMouseEnterItem(menu.find((item) => item.name === "Blogs"))
      }
      onClick={onClick}
    >
      {category.name}
    </Link>
  );
};

const SubMenuLink = ({ active, item, onMouseEnter, onClick, forceActive }) => (
  <Link
    className={`relative flex flex-col px-[15px] py-[10px] pr-[30px] border-l-2 rounded-[5px] hover:bg-grey-fe hover:text-secondary hover:border-l-secondary smooth ${
      active || forceActive
        ? "bg-grey-fe text-secondary border-l-secondary"
        : "border-l-transparent"
    } group/inner-link`}
    href={item.path}
    onMouseEnter={onMouseEnter}
    onClick={onClick}
  >
    {item.name}
    <svg
      className={`absolute top-1/2 right-[15px] -translate-y-1/2 ${
        active || forceActive
          ? "opacity-100 visible -translate-x-0"
          : "invisible opacity-0 translate-x-[3px]"
      } group-hover/inner-link:opacity-100 group-hover/inner-link:visible group-hover/inner-link:-translate-x-0 smooth`}
      width="7"
      height="9"
      viewBox="0 0 7 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.26758 0.766602L5.00091 4.49994L1.26758 8.23327"
        stroke="#052039"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </Link>
);

export default DropdownMenu;
