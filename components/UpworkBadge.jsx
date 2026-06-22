import Link from "next/link";

// Static Upwork badge — same trust-signal pattern as ClutchBadge, two variants:
//   variant="personal"  : Zain T. freelancer profile, green wordmark
//   variant="agency"    : Acgile agency profile, black wordmark
//
// Update the constants below when the underlying numbers move.

const PROFILES = {
  personal: {
    url: "https://www.upwork.com/freelancers/~01194e31be7ebf7d37",
    color: "#14A800",
    jss: "100%",
    badge: "Top Rated",
    hours: "8,976",
  },
  agency: {
    url: "https://www.upwork.com/agencies/acgile/",
    color: "#001E00",
    jss: "100%",
    badge: "Top Rated Plus",
    hours: "6,904",
  },
};

const UpworkWordmark = ({ color }) => (
  <span
    className="font-bold text-[20px] leading-none tracking-tight lowercase"
    style={{ color }}
    aria-hidden="true"
  >
    upwork
  </span>
);

const UpworkBadge = ({ variant = "agency", className = "" }) => {
  const p = PROFILES[variant];
  const label =
    variant === "personal"
      ? `Zain T. on Upwork — ${p.badge}, ${p.jss} Job Success, ${p.hours} hours — opens in a new tab`
      : `Acgile agency on Upwork — ${p.badge}, ${p.jss} Job Success, ${p.hours} hours — opens in a new tab`;

  return (
    <Link
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-[14px] px-[18px] py-[10px] border border-grey-eb rounded-[12px] bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow ${className}`}
    >
      <UpworkWordmark color={p.color} />
      <span className="h-[28px] w-[1px] bg-grey-eb" aria-hidden="true" />
      <span className="flex flex-col ">
        <span className="text-[12px] font-semibold text-secondary leading-tight">
          {p.badge}
        </span>
        <span className="text-[11px] text-grey-71 leading-none mt-[4px]">
          {p.jss} <span aria-hidden="true">·</span> {p.hours} hours
        </span>
      </span>
    </Link>
  );
};

export default UpworkBadge;
