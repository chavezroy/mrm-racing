"use client";

import ScrollReveal from "./ScrollReveal";

type ScheduleItemProps = {
  day: string;
  month: string;
  location: string;
  city: string;
  time: string;
  delay?: number;
};

export default function ScheduleItem({
  day,
  month,
  location,
  city,
  time,
  delay = 0,
}: ScheduleItemProps) {
  return (
    <ScrollReveal animation="slideInLeft" delay={delay} className="slidein mb-4">
      <ul className="flex items-center my-2 p-4 bg-white/5 uppercase font-black font-sans w-full -skew-x-3 md:-skew-x-[7deg]">
        <li className="inline-block text-center float-left mr-5 flex-shrink-0">
          <div className="date px-3 py-1" style={{ backgroundColor: '#ffc107' }}>
            <span className="block text-4xl md:text-5xl leading-tight tracking-[-3px] font-black">
              {day}
            </span>
            <span className="block">{month}</span>
          </div>
        </li>
        <li className="detail flex-1 flex flex-col justify-center">
          <div className="block align-content-end leading-tight text-white">
            {location}
          </div>
          <div className="detail block align-content-start leading-[2em] text-sm text-secondary text-white normal-case font-normal font-sans skew-x-3 md:skew-x-[7deg]">
            {city} | {time}
          </div>
        </li>
      </ul>
    </ScrollReveal>
  );
}

