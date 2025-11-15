"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/malcolm", label: "Meet Malcolm" },
    { href: "/gear", label: "Gear & Equipment" },
    { href: "/schedule", label: "Schedule" },
    { href: "/partner", label: "Partner" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname?.startsWith(href)) return true;
    return false;
  };

  return (
    <footer
      className="honey text-[#c5c5c5] py-5 relative"
      style={{
        backgroundImage: "url('/img/bg-blue.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundColor: "#05111b",
        backgroundSize: "200%",
      }}
    >
      <div className="container mx-auto px-4">
        <p className="float-right mb-1">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[#c5c5c5] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up inline"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>{" "}
            Back to top
          </a>
        </p>
        <ul className="nav block md:inline">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`nav-item ${index === 0 ? "inline" : "inline"} ${
                index === 0 ? "md:inline" : "md:inline"
              }`}
            >
              <Link
                href={link.href}
                className={`nav-link ${
                  index === 0 ? "pr-4 md:pr-4" : "px-4 md:px-4"
                } py-4 md:py-0 inline-block md:inline ${
                  isActive(link.href)
                    ? "active text-primary"
                    : "text-[#c5c5c5] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mb-0 text-secondary mt-4">Copyright 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}

