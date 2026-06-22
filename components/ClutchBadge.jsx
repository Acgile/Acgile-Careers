import Link from "next/link";

// Static Clutch badge — no third-party JS so it doesn't tax Core Web Vitals.
// If rating/review count moves, update these two numbers and ship.
const RATING = "5.0";
const REVIEW_COUNT = 6;
const PROFILE_URL = "https://clutch.co/profile/acgile";

const Star = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="#FF3D2E" aria-hidden="true">
    <path d="M7 0l2.16 4.379 4.84.703-3.5 3.412.826 4.815L7 11.027 2.674 13.31l.826-4.815L0 5.082l4.84-.703L7 0z" />
  </svg>
);

const ClutchBadge = ({ className = "" }) => {
  return (
    <Link
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Acgile is rated ${RATING} out of 5 stars based on ${REVIEW_COUNT} verified reviews on Clutch — opens in a new tab`}
      className={`  inline-flex items-center gap-[14px] px-[18px] py-[10px] border border-grey-eb rounded-[12px] bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow ${className}`}
    >
      <span className="text-[#FF3D2E] font-bold text-[20px] leading-none tracking-tight">
        Clutch
      </span>
      <span className="h-[28px] w-[1px] bg-grey-eb" aria-hidden="true" />
      <span className="flex flex-col">
        <span className="flex items-center gap-[2px]" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} />
          ))}
        </span>
        <span className="text-[11px] text-grey-71 leading-none mt-[4px]">
          {RATING} <span aria-hidden="true">·</span> {REVIEW_COUNT} verified reviews
        </span>
      </span>
    </Link>
  );
};

export default ClutchBadge;
