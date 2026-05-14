import Link from "next/link";
import { usePathname } from "next/navigation";

const DropdownMenu = ({ menu }) => {
  const currentPath = usePathname();
  const columns = menu.length < 6 ? 1 : 2;
  return (
    <div className="invisible opacity-0 translate-y-[20px] group-hover:visible group-hover:opacity-100 absolute z-[1000] top-[48px] left-1/2 -translate-x-1/2 group-hover:translate-y-0 transition-all ease-in-out duration-200">
      <span className="dropdown-menu-tip"></span>
      <nav
        style={{ width: columns * 285 }}
        className={`mt-[16px] ${
          columns > 1
            ? "grid grid-cols-2 gap-x-[25px] before:bg-grey-f5 before:w-[1px] before:absolute before:top-[30px] before:bottom-[12px] before:left-1/2 before:-translate-x-1/2 before:z-10"
            : "flex flex-col gap-[5px]"
        } text-[14px] bg-white border border-grey-f5 shadow-[0_8px_22px_#0520390D] rounded-[7px] p-[12px]`}
      >
        {menu.length < 6 ? (
          <>
            {menu.map((item, index) => {
              const active = currentPath === item.path;
              return <SubMenuLink key={index} item={item} active={active} />;
            })}
          </>
        ) : (
          <>
            <div className="flex flex-col gap-[5px]">
              {menu
                .filter((item, index) => index < 7)
                .map((item, index) => {
                  const active = currentPath === item.path;
                  return (
                    <SubMenuLink key={index} item={item} active={active} />
                  );
                })}
            </div>
            <div className="flex flex-col gap-[5px]">
              {menu
                .filter((item, index) => index >= 7)
                .map((item, index) => {
                  const active = currentPath === item.path;
                  return (
                    <SubMenuLink key={index} item={item} active={active} />
                  );
                })}
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default DropdownMenu;

const SubMenuLink = ({ active, item }) => (
  <Link
    className={`relative flex flex-col px-[15px] py-[10px] pr-[30px] border-l-2 rounded-[5px] hover:bg-grey-fe hover:text-secondary hover:border-l-secondary transition-all ease-in-out duration-200 ${
      active
        ? "bg-grey-fe text-secondary border-l-secondary"
        : "border-l-transparent"
    } group/inner-link`}
    href={item.path}
  >
    {item.name}
    <svg
      className="absolute top-1/2 right-[15px] -translate-y-1/2 invisible opacity-0 translate-x-[3px] group-hover/inner-link:opacity-100 group-hover/inner-link:visible group-hover/inner-link:-translate-x-0 transition-all ease-in-out duration-200"
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
