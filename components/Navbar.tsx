"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: isMobile ? "0 1.25rem" : "0 4rem",
      height: 58,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid #e4ecef",
      boxSizing: "border-box",
      width: "100%",
    }}>
      <Image
        src="/assets/orders2meLogo.png"
        alt="orders2me"
        width={140}
        height={40}
        priority
        style={{
          height: isMobile ? 28 : 34,
          width: "auto",
          objectFit: "contain",
        }}
      />

      <Link href="tel:8008811622" style={{
        background: "#17a7ce",
        color: "#fff",
        padding: isMobile ? "6px 14px" : "7px 20px",
        borderRadius: 6,
        fontSize: isMobile ? "0.75rem" : "0.82rem",
        fontWeight: 600,
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}>
        {isMobile ? "(800) 881-1622" : "Call +1 800-881-1622"}
      </Link>
    </nav>
  );
}