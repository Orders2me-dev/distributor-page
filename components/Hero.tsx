"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/app/hooks/useIsMobile";

const images = ["/assets/pos2.png", "/assets/pos1.png"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "grid",
      // On mobile: image on top, copy below
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gridTemplateRows: isMobile ? "auto 1fr" : "1fr",
      paddingTop: 58,
    }}>

      {/* IMAGE — renders first in DOM so it appears on top on mobile */}
      <div style={{
        background: "#f7fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "2rem 2.5rem 1rem" : "4rem",
        position: "relative",
        overflow: "hidden",
        minHeight: isMobile ? 220 : "auto",
        // On desktop, move image to the right column
        order: isMobile ? -1 : 1,
        borderLeft: isMobile ? "none" : "1px solid #e4ecef",
        borderBottom: isMobile ? "1px solid #e4ecef" : "none",
      }}>
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="orders2me POS System"
            width={600}
            height={600}
            priority={i === 0}
            style={{
              position: i === 0 ? "relative" : "absolute",
              width: isMobile ? "75%" : "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 16px 40px rgba(23,167,206,0.15))",
              opacity: current === i
                ? (fading && current === i ? 0 : 1)
                : (fading && (current + 1) % images.length === i ? 1 : 0),
              transition: "opacity 0.8s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* COPY */}
      <div style={{
        padding: isMobile ? "2rem 1.5rem 3rem" : "10vh 4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        order: isMobile ? 1 : 0,
      }}>
        {/* Eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          color: "#17a7ce", fontSize: "0.68rem", fontWeight: 600,
          letterSpacing: "2px", textTransform: "uppercase",
          marginBottom: isMobile ? 16 : 24,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#17a7ce", display: "inline-block", flexShrink: 0,
          }} />
          Now Recruiting Partners
        </div>

        {/* Headline — single word on its own line on mobile */}
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? "clamp(5rem, 24vw, 7rem)" : "clamp(5rem, 9vw, 9rem)",
          lineHeight: 0.88,
          letterSpacing: "2px",
          color: "#0a0f12",
          marginBottom: isMobile ? 20 : 32,
        }}>
          DISTRIBUTORS<br />
          <span style={{ color: "#17a7ce" }}>WANTED</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: isMobile ? "0.9rem" : "1.05rem",
          color: "#6b7f89",
          lineHeight: 1.75,
          maxWidth: 560,
          marginBottom: isMobile ? 28 : 40,
          fontWeight: 400,
        }}>
          Build a recurring income stream selling technology every retailer and
          restaurant needs. Zero upfront cost, full training, uncapped earnings.
        </p>

        {/* CTAs — full width on mobile */}
        <div style={{
          display: "flex",
          gap: 10,
          flexDirection: isMobile ? "column" : "row",
        }}>
          <Link href="#apply" style={{
            background: "#0a0f12",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: 8,
            fontSize: "0.9rem",
            fontWeight: 600,
            textDecoration: "none",
            textAlign: "center",
          }}>
            Become a Distributor →
          </Link>
          <Link href="#products" style={{
            border: "1.5px solid #e4ecef",
            color: "#0a0f12",
            padding: "14px 28px",
            borderRadius: 8,
            fontSize: "0.9rem",
            fontWeight: 500,
            textDecoration: "none",
            textAlign: "center",
          }}>
            See Products
          </Link>
        </div>
      </div>

    </section>
  );
}