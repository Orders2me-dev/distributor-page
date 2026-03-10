"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

interface FormState {
  name: string;
  email: string;
  phone: string;
}

const fields: { label: string; key: keyof FormState; type: string; placeholder: string }[] = [
  { label: "Full Name", key: "name",  type: "text",  placeholder: "Jane Smith" },
  { label: "Email",     key: "email", type: "email", placeholder: "jane@example.com" },
  { label: "Phone",     key: "phone", type: "tel",   placeholder: "(555) 000-0000" },
];

export default function ApplyForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" style={{ background: "#0a0f12", padding: "100px 4rem" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center",
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 6vw, 6rem)",
            lineHeight: 0.9, color: "#fff", marginBottom: 20, letterSpacing: "1px",
          }}>
            READY TO<br /><span style={{ color: "#17a7ce" }}>GET STARTED?</span>
          </h2>
          <p style={{ color: "#6b8a96", fontSize: "0.93rem", lineHeight: 1.75, marginBottom: 36 }}>
            Fill in your details and an orders2me representative will be in touch
            within 24 hours to walk you through the opportunity.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#9ab5c0", fontSize: "0.85rem" }}>
            <span>Or call us directly —</span>
            <Link href="tel:8888700017" style={{ color: "#17a7ce", textDecoration: "none", fontWeight: 600 }}>
              (888) 870-0017
            </Link>
          </div>
        </div>

        {submitted ? (
          <div style={{
            textAlign: "center", padding: "60px 40px",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16,
          }}>
            <div style={{ fontSize: "2.5rem", color: "#17a7ce", marginBottom: 16 }}>✓</div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "#fff", marginBottom: 10 }}>
              YOU&apos;RE IN
            </h3>
            <p style={{ color: "#6b8a96", fontSize: "0.9rem", lineHeight: 1.6 }}>
              We&apos;ll be in touch within 24 hours.<br />
              Questions? Call <Link href="tel:8888700017" style={{ color: "#17a7ce", textDecoration: "none" }}>(888) 870-0017</Link>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {fields.map(({ label, key, type, placeholder }) => (
              <div key={key} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label htmlFor={key} style={{
                  fontSize: "0.7rem", fontWeight: 600, color: "#6b8a96",
                  letterSpacing: "1.5px", textTransform: "uppercase",
                }}>
                  {label}
                </label>
                <input
                  id={key} name={key} type={type} required placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "#fff", padding: "13px 16px", borderRadius: 8,
                    fontSize: "0.92rem", fontFamily: "DM Sans, sans-serif", outline: "none",
                  }}
                />
              </div>
            ))}
            <button type="submit" style={{
              background: "#17a7ce", color: "#fff", padding: "15px",
              borderRadius: 8, border: "none", fontSize: "0.95rem",
              fontWeight: 600, cursor: "pointer",
              fontFamily: "DM Sans, sans-serif", marginTop: 8,
            }}>
              Become a Distributor →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}