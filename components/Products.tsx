"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import type { Product } from "@/app/types";

const coreProducts: Product[] = [
  { icon: "🛒", name: "Online Ordering",    desc: "$199/mo · $299 setup — First-party ordering with no per-order % fees. Menu, hours & modifier control with text & email alerts." },
  { icon: "🖥️", name: "O2M POS All-in-One", desc: "$299/mo · $799 setup — POS + Payments + Online Ordering. Kitchen routing, staff management & unified menu across all channels." },
  { icon: "🔗", name: "Integrate with POS", desc: "$399/mo · $999 setup — Direct order injection into your existing POS. Inventory sync, menu mapping & advanced analytics." },
];

const kioskProducts: Product[] = [
  { icon: "📟", name: "Pay Per Kiosk",    desc: "$100/mo · $0 setup — Self-ordering kiosks on iPad or Android. Card + tap to pay with queue & kitchen printing." },
  { icon: "♾️", name: "Unlimited Kiosks", desc: "$500/mo · $500 setup — Unlimited devices per location. Priority support and menu A/B testing included." },
];

const addOns: Product[] = [
  { icon: "🌐", name: "Website Management", desc: "$100/mo · $500 setup — Hosting, SSL, unlimited updates & SEO hygiene. Everything managed for you." },
  { icon: "📱", name: "Mobile Apps",        desc: "$100/mo · $500 setup — Branded native apps with push notifications and built-in customer loyalty." },
];

const processors = ["Stripe", "Heartland", "Authorize.Net", "Worldpay", "First Data", "Adyen", "Apple Pay", "Google Pay", "Visa", "Mastercard", "Amex", "Discover"];

function ProductGrid({ products, isMobile }: { products: Product[]; isMobile: boolean }) {
  const cols = isMobile ? 1 : products.length <= 2 ? products.length : 3;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      border: "1px solid #e4ecef",
      borderRadius: 16, overflow: "hidden",
      gap: 1, background: "#e4ecef", marginBottom: 48,
    }}>
      {products.map((p) => (
        <div key={p.name} style={{ background: "#fff", padding: isMobile ? "24px 20px" : "32px 28px" }}>
          <span style={{ fontSize: "1.5rem", display: "block", marginBottom: 14 }}>{p.icon}</span>
          <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "#0a0f12", marginBottom: 8 }}>{p.name}</div>
          <div style={{ fontSize: "0.8rem", color: "#6b7f89", lineHeight: 1.65 }}>{p.desc}</div>
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{
      fontSize: "0.7rem", fontWeight: 600, letterSpacing: "2px",
      textTransform: "uppercase", color: "#17a7ce", marginBottom: 16,
    }}>
      {children}
    </div>
  );
}

export default function Products() {
  const isMobile = useIsMobile();

  return (
    <section id="products" style={{
      maxWidth: 1200, margin: "0 auto",
      padding: isMobile ? "64px 1.5rem" : "100px 4rem",
    }}>
      <div style={{
        fontSize: "0.7rem", fontWeight: 600, letterSpacing: "2.5px",
        textTransform: "uppercase", color: "#17a7ce", marginBottom: 20,
      }}>
        Portfolio
      </div>

      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isMobile ? "clamp(2.5rem, 10vw, 3.5rem)" : "clamp(3rem, 5vw, 5rem)",
        lineHeight: 0.92, color: "#0a0f12", marginBottom: 20, letterSpacing: "1px",
      }}>
        PRODUCTS THAT<br />SELL THEMSELVES
      </h2>

      <p style={{
        color: "#6b7f89", fontSize: "0.97rem", lineHeight: 1.75,
        maxWidth: 520, marginBottom: 60,
      }}>
        Every restaurant and retailer you visit needs at least one of these.
        No per-order fees. No long-term contracts. Go live in ~7 days.
      </p>

      <SectionLabel>Core Plans</SectionLabel>
      <ProductGrid products={coreProducts} isMobile={isMobile} />

      <SectionLabel>Kiosk Plans</SectionLabel>
      <ProductGrid products={kioskProducts} isMobile={isMobile} />

      <SectionLabel>Add-Ons</SectionLabel>
      <ProductGrid products={addOns} isMobile={isMobile} />

      <div style={{
        marginTop: 16, padding: isMobile ? "20px" : "28px 32px",
        border: "1px solid #e4ecef", borderRadius: 16,
        display: "flex", alignItems: "center",
        gap: 12, flexWrap: "wrap",
      }}>
        <span style={{
          fontSize: "0.75rem", fontWeight: 600, color: "#6b7f89",
          letterSpacing: "1px", textTransform: "uppercase",
          width: isMobile ? "100%" : "auto",
        }}>
          Payments accepted
        </span>
        {processors.map((p) => (
          <span key={p} style={{
            fontSize: "0.78rem", fontWeight: 500, color: "#0a0f12",
            background: "#f7fafb", border: "1px solid #e4ecef",
            padding: "4px 12px", borderRadius: 999,
          }}>
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}