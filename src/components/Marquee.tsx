import { tickerItems } from "@/src/data/content";

export default function Marquee() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div
      className="overflow-hidden border-y border-white/15 bg-white py-3"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center text-sm font-bold uppercase tracking-[0.2em] text-black"
              >
                <span className="px-6">{item}</span>
                <span className="text-acid">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
