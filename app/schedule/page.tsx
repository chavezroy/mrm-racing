import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleItem from "@/components/ScheduleItem";
import ScrollReveal from "@/components/ScrollReveal";
import ShapeDivider from "@/components/ShapeDivider";

export const metadata: Metadata = {
  title: "MRM Racing - Schedule",
  description: "Find Malcolm on the track. Check out the latest schedule.",
};

const scheduleData = [
  {
    day: "01",
    month: "Apr",
    location: "LA International Racing Track",
    city: "Los Angeles",
    time: "11 am",
  },
  {
    day: "16",
    month: "May",
    location: "LA International Racing Track",
    city: "Los Angeles",
    time: "11 am",
  },
  {
    day: "08",
    month: "Jun",
    location: "LA International Racing Track",
    city: "Los Angeles",
    time: "11 am",
  },
  {
    day: "24",
    month: "Jul",
    location: "LA International Racing Track",
    city: "Los Angeles",
    time: "11 am",
  },
];

export default function SchedulePage() {
  return (
    <>
      <Header />
      <h1 className="text-center text-2xl md:text-4xl font-racing leading-[60px] my-4 text-white">
        Schedule
      </h1>
      <section className="sched bg-fiber flex flex-col justify-center v-80 min-h-[80vh] px-4 overflow-hidden pb-[10em] relative">
        <div className="container mx-auto">
          <ScrollReveal animation="fadeIn">
            <h2 className="heading text-center mb-2 mt-0 text-2xl font-michroma leading-tight text-white w-fit mx-auto">
              <span className="text-secondary text-primary block text-[70%] leading-tight mb-1">
                On the
              </span>
              track
            </h2>
          </ScrollReveal>
          <p className="text-center text-white mb-8">Check out the current schedule.</p>
          <div className="flex justify-center w-full">
            <div className="schedule w-full md:w-[40%]">
              {scheduleData.map((item, index) => (
                <ScheduleItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        <ShapeDivider variant="bottom-1741052430" />
      </section>
      <Footer />
    </>
  );
}

