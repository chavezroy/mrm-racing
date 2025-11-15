"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
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
    <div className="honey">
      <header className="flex flex-wrap justify-center py-3 px-5 border-b border-[#333]">
        <Link
          href="/"
          className="flex items-center mb-0 me-auto logo-header"
        >
          <Image
            src="/img/logo-mrm-racing.png"
            alt="MRM Racing"
            width={200}
            height={44}
            className="h-11 relative top-1"
          />
          <span className="hidden">MRM Racing</span>
        </Link>
        <ul className="hidden lg:flex nav nav-pills">
          {navLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <Link
                href={link.href}
                className={`nav-link px-3 py-2 ${
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
        <button
          className="lg:hidden navbar-toggler mr-4 p-2 border border-[#333] rounded bg-transparent"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list text-white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <div
          className={`fixed top-[75px] right-0 h-[calc(100vh-75px)] w-80 bg-black text-white z-50 border-l border-black transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundImage: "url('/img/bg-charc-carbonfiber.png')",
            backgroundSize: "150%",
            backgroundPosition: "top center",
            fontSize: "1.4em",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="navbar-collapse p-4">
            <ul className="navbar-nav text-center mt-8">
              <li className="nav-item mb-4">
                <Link
                  href="/"
                  className={`nav-link ${
                    pathname === "/" ? "active text-primary" : "text-[#c5c5c5]"
                  } hover:text-primary`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item mb-4">
                  <Link
                    href={link.href}
                    className={`nav-link ${
                      isActive(link.href)
                        ? "active text-primary"
                        : "text-[#c5c5c5]"
                    } hover:text-primary`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-0 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>
    </div>
  );
}

