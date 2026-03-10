"use client";

import Link from "next/link";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer style={{
      borderTop: "1px solid #e4ecef",
      padding: isMobile ? "24px 1.5rem" : "28px 4rem",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
      justifyContent: "space-between",
      gap: 12,
      width: "100%",
      boxSizing: "border-box",
    }}>
      <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "#0a0f12" }}>
        orders<span style={{ color: "#17a7ce" }}>2me</span>
      </span>
      <span style={{ fontSize: "0.75rem", color: "#6b7f89" }}>
        All products subject to terms. See{" "}
        <Link href="https://orders2.me" style={{ color: "#17a7ce", textDecoration: "none", fontWeight: 600 }}>
          orders2.me
        </Link>{" "}
        for details.
      </span>
      <Link href="tel:8008811622" style={{
        color: "#17a7ce", textDecoration: "none",
        fontSize: "0.75rem", fontWeight: 600,
      }}>
        (800) 881-1622
      </Link>
    </footer>
  );
}