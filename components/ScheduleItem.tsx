"use client";

import ScrollReveal from "./ScrollReveal";

type ScheduleItemProps = {
  day: string;
  month: string;
  location: string;
  city: string;
  time: string;
};

export default function ScheduleItem({
  day,
  month,
  location,
  city,
  time,
}: ScheduleItemProps) {
  return (
    <ScrollReveal animation="slideInLeft" className="slidein mb-4">
      <ul className="flex flex-wrap items-stretch my-2 p-4 bg-white/5 uppercase font-black font-sans w-full -skew-x-3 md:-skew-x-[7deg]">
        <li className="inline-block text-center float-left mr-5">
          <div className="date px-3 py-1" style={{ backgroundColor: '#ffc107' }}>
            <span className="block text-4xl md:text-5xl leading-tight tracking-[-3px] font-black">
              {day}
            </span>
            <span className="block">{month}</span>
          </div>
        </li>
        <li className="detail block align-content-end h-[45px] leading-tight text-white flex-1">
          {location}
        </li>
        <li className="detail block align-content-start h-[45px] leading-[2em] text-sm text-secondary text-white normal-case font-normal font-sans skew-x-3 md:skew-x-[7deg] w-full mt-2">
          {city} | {time}
        </li>
      </ul>
    </ScrollReveal>
  );
}

