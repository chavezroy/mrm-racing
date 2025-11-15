import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import ScrollReveal from "@/components/ScrollReveal";
import ShapeDivider from "@/components/ShapeDivider";

export const metadata: Metadata = {
  title: "MRM Racing - Partner",
  description: "Want your brand on a winning formula? Contact us to become a partner.",
};

export default function PartnerPage() {
  return (
    <>
      <Header />
      <h1 className="text-center text-2xl md:text-4xl font-racing leading-[60px] my-4 text-white">
        Become A Partner
      </h1>
      <section className="partner bg-fiber flex flex-col justify-center v-80 min-h-[70vh] relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeIn">
            <h2 className="heading text-center mb-5 mt-0 text-2xl font-michroma leading-tight text-white w-fit mx-auto">
              <span className="text-secondary text-primary block text-[70%] leading-normal mb-1 overflow-visible">
                Become a
              </span>
              partner
            </h2>
          </ScrollReveal>
          <p className="text-body-secondary text-center text-white mb-4">
            Fill out the form to submit.
          </p>
          <div className="row flex flex-wrap -mx-4 justify-center">
            <div className="w-full md:w-1/2 lg:w-2/5 px-4 fade">
              <PartnerForm />
            </div>
          </div>
        </div>
        <ShapeDivider variant="bottom-1741052430" />
      </section>
      <Footer />
    </>
  );
}

