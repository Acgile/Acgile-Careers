import Link from "next/link";

// Static Google Business Profile badge — same pattern as Clutch/Upwork.
// User flagged that GMB reviews are mostly from employees, but still want
// the badge surfaced.
// Update RATING / REVIEW_COUNT / PROFILE_URL when those move.

const RATING = "5.0";
const REVIEW_COUNT = 32;
const PROFILE_URL = "https://share.google/uDtVFRUVy3mbjTX3d";

const Star = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="#FBBC04" aria-hidden="true">
    <path d="M7 0l2.16 4.379 4.84.703-3.5 3.412.826 4.815L7 11.027 2.674 13.31l.826-4.815L0 5.082l4.84-.703L7 0z" />
  </svg>
);

const GoogleWordmark = () => (
  // Google's official wordmark colors: G blue, o red, o yellow, g blue, l green, e red
  <span className="font-bold text-[20px] leading-none tracking-tight" aria-hidden="true">
    <span style={{ color: "#4285F4" }}>G</span>
    <span style={{ color: "#EA4335" }}>o</span>
    <span style={{ color: "#FBBC04" }}>o</span>
    <span style={{ color: "#4285F4" }}>g</span>
    <span style={{ color: "#34A853" }}>l</span>
    <span style={{ color: "#EA4335" }}>e</span>
  </span>
);

const GoogleBadge = ({ className = "" }) => {
  const reviewText = REVIEW_COUNT > 0
    ? `${REVIEW_COUNT} reviews`
    : "Reviews";
  return (
    <Link
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Acgile is rated ${RATING} out of 5 stars on Google${REVIEW_COUNT > 0 ? ` based on ${REVIEW_COUNT} reviews` : ""} — opens in a new tab`}
      className={`w-[100%] inline-flex items-center gap-[14px] px-[18px] py-[10px] border border-grey-eb rounded-[12px] bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow ${className}`}
    >
      <GoogleWordmark />
      <span className="h-[28px] w-[1px] bg-grey-eb" aria-hidden="true" />
      <span className="flex flex-col">
        <span className="flex items-center gap-[2px]" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} />
          ))}
        </span>
        <span className="text-[11px] text-grey-71 leading-none mt-[4px]">
          {RATING} <span aria-hidden="true">·</span> {reviewText}
        </span>
      </span>
    </Link>
  );
};

export default GoogleBadge;
