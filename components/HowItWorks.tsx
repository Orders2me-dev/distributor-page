"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import type { Step } from "@/app/types";

const steps: Step[] = [
  { n: "01", title: "Apply for Free",          desc: "No fees, no equipment costs. We cover everything to get you started — zero out-of-pocket." },
  { n: "02", title: "Get Trained & Supported", desc: "Full product training and dedicated sales support from your first day." },
  { n: "03", title: "Earn Residuals",          desc: "Monthly recurring income on every active account. The longer they stay, the more you earn." },
];

export default function HowItWorks() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      maxWidth: 1200, margin: "0 auto",
      padding: isMobile ? "64px 1.5rem" : "100px 4rem",
    }}>
      <div style={{
        fontSize: "0.7rem", fontWeight: 600, letterSpacing: "2.5px",
        textTransform: "uppercase", color: "#17a7ce", marginBottom: 20,
      }}>
        Process
      </div>

      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isMobile ? "clamp(2.5rem, 10vw, 3.5rem)" : "clamp(3rem, 5vw, 5rem)",
        lineHeight: 0.92, color: "#0a0f12",
        marginBottom: 20, letterSpacing: "1px",
      }}>
        THREE STEPS<br />TO START EARNING
      </h2>

      <p style={{
        color: "#6b7f89", fontSize: "0.97rem", lineHeight: 1.75,
        maxWidth: 480, marginBottom: 48,
      }}>
        We&apos;ve removed every barrier between you and your first commission check.
      </p>

      <div style={{ borderTop: "1px solid #e4ecef" }}>
        {steps.map((s) => (
          <div key={s.n} style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "48px 1fr" : "80px 1fr",
            gap: isMobile ? 16 : 24,
            padding: isMobile ? "24px 0" : "36px 0",
            borderBottom: "1px solid #e4ecef",
            alignItems: "start",
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.1rem", color: "#17a7ce",
              letterSpacing: "1px", paddingTop: 3,
            }}>
              {s.n}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: 6, color: "#0a0f12" }}>
                {s.title}
              </div>
              <div style={{ fontSize: "0.87rem", color: "#6b7f89", lineHeight: 1.65 }}>
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}