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
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      paddingTop: 58,
    }}>
      {/* Left — copy */}
      <div style={{
        padding: isMobile ? "8vh 1.5rem 4vh" : "10vh 4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRight: isMobile ? "none" : "1px solid #e4ecef",
        borderBottom: isMobile ? "1px solid #e4ecef" : "none",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          color: "#17a7ce", fontSize: "0.72rem", fontWeight: 600,
          letterSpacing: "2px", textTransform: "uppercase", marginBottom: 24,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#17a7ce", display: "inline-block" }} />
          Now Recruiting Partners
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? "clamp(4.5rem, 22vw, 7rem)" : "clamp(5rem, 9vw, 9rem)",
          lineHeight: 0.88,
          letterSpacing: "2px",
          color: "#0a0f12",
          marginBottom: 32,
        }}>
          DISTRI<br />BUTORS<br />
          <span style={{ color: "#17a7ce" }}>WANTED</span>
        </h1>

        <p style={{
          fontSize: isMobile ? "0.95rem" : "1.05rem",
          color: "#6b7f89", lineHeight: 1.8,
          maxWidth: 560, marginBottom: 40, fontWeight: 400,
        }}>
          Build a recurring income stream selling technology every retailer and
          restaurant needs. Zero upfront cost, full training, uncapped earnings.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="#apply" style={{
            background: "#0a0f12", color: "#fff",
            padding: isMobile ? "12px 22px" : "14px 28px",
            borderRadius: 8, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
            flex: isMobile ? "1" : "unset", textAlign: "center",
          }}>
            Become a Distributor →
          </Link>
          <Link href="#products" style={{
            border: "1.5px solid #e4ecef", color: "#0a0f12",
            padding: isMobile ? "12px 22px" : "14px 28px",
            borderRadius: 8, fontSize: "0.9rem", fontWeight: 500, textDecoration: "none",
            flex: isMobile ? "1" : "unset", textAlign: "center",
          }}>
            See Products
          </Link>
        </div>
      </div>

      {/* Right — crossfading POS images */}
      <div style={{
        background: "#f7fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "3rem 2rem" : "4rem",
        position: "relative",
        overflow: "hidden",
        minHeight: isMobile ? 280 : "auto",
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
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 32px 64px rgba(23,167,206,0.15))",
              opacity: current === i
                ? (fading && current === i ? 0 : 1)
                : (fading && (current + 1) % images.length === i ? 1 : 0),
              transition: "opacity 0.8s ease-in-out",
            }}
          />
        ))}
      </div>
    </section>
  );
}