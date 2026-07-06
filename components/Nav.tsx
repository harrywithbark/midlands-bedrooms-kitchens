"use client";

import { useState } from "react";

const navLinks = [
  { href: "#wardrobes", label: "Wardrobes" },
  { href: "#kitchens", label: "Kitchens" },
  { href: "#finishes", label: "Finishes" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="stuck">
        <div className="logo">Midlands Bedrooms & Kitchens</div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn" href="#contact">
          WhatsApp / Call
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="btn" href="#contact" onClick={closeMenu}>
          WhatsApp / Call
        </a>
      </div>
    </>
  );
}
