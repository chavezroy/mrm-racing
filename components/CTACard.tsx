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
    <div className="w-full md:w-1/3 px-4 mb-8">
      <ScrollReveal animation="fadeIn" className="fade">
        <Link href={href} className="cardlink cursor-pointer text-inherit hover:no-underline block">
          <div className="card bg-transparent border border-black/10">
            <div className="thumb flex bg-[#31bfd3] relative overflow-hidden w-full h-[300px] max-w-[280px] mx-auto">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain transition-all duration-300 hover:scale-110"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  padding: "0 5px",
                }}
              />
            </div>
            <div className="card-body p-4">
              <p className="card-title font-michroma text-lg leading-tight text-primary mb-2 hover:text-black group-hover:text-white transition-colors">
                {title}
              </p>
              <p className="text-body-secondary text-[rgba(105,109,113,0.9)] font-light leading-tight mb-3">
                {description}
              </p>
              <button
                type="button"
                className="btn btn-primary bg-primary text-white border-primary hover:bg-[#c63615] hover:border-[#c63615] px-4 py-2 rounded transition-colors"
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

