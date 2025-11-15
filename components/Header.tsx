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
      <header className="flex flex-wrap items-center justify-center py-3 px-5 border-b border-[#333] relative z-[60] bg-transparent">
        <Link
          href="/"
          className="flex items-center mb-0 me-auto relative z-[61]"
        >
          <Image
            src="/img/logo-mrm-racing.png"
            alt="MRM Racing"
            width={107}
            height={32}
            className="h-8 relative top-1"
            style={{ color: 'inherit' }}
          />
          <span className="hidden">MRM Racing</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link px-3 py-2 transition-colors duration-300 ${
                  isActive(link.href)
                    ? "active text-primary"
                    : "text-[#c5c5c5] hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="lg:hidden navbar-toggler mr-4 p-2 border border-[#333] rounded bg-transparent relative z-[60]"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-x-lg text-white"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          ) : (
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
          )}
        </button>
        <div
          className={`fixed top-[75px] left-0 right-0 h-[calc(100vh-75px)] w-full bg-black text-white z-50 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            fontSize: "1.4em",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            <ul className="text-center mt-8">
              <li className="mb-4">
                <Link
                  href="/"
                  className={`nav-link transition-colors duration-300 ${
                    pathname === "/" ? "active text-primary" : "text-[#c5c5c5]"
                  } hover:text-primary`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href} className="mb-4">
                  <Link
                    href={link.href}
                    className={`nav-link transition-colors duration-300 ${
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

