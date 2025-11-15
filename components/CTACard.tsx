import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

type CTACardProps = {
  href: string;
  image: string;
  title: string;
  description: string;
};

export default function CTACard({
  href,
  image,
  title,
  description,
}: CTACardProps) {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8 group">
      <ScrollReveal animation="fadeIn" className="fade">
        <Link href={href} className="cardlink cursor-pointer text-inherit hover:no-underline block">
          <div className="card bg-transparent border border-black/10">
            <div className="thumb flex bg-[#31bfd3] relative overflow-hidden w-full h-[300px] max-w-[280px] mx-auto">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[97%] h-[97%] pointer-events-auto">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain cta-image"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="card-body py-4" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
              <p className="card-title font-michroma text-lg leading-tight text-primary mb-2 group-hover:text-white transition-colors duration-300">
                {title}
              </p>
              <p className="text-body-secondary text-[rgba(105,109,113,0.9)] font-light leading-tight mb-3">
                {description}
              </p>
              <button
                type="button"
                className="btn btn-primary bg-primary text-white border-primary group-hover:bg-[#c63615] group-hover:border-[#c63615] px-4 py-2 rounded transition-[transform,background-color,border-color] duration-300 ease-out group-hover:scale-110"
              >
                Learn More
              </button>
            </div>
          </div>
        </Link>
      </ScrollReveal>
    </div>
  );
}

