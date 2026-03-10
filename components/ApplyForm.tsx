"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { submitApplication, type FormState } from "@/app/actions";

const fields: { label: string; key: string; type: string; placeholder: string }[] = [
  { label: "Full Name", key: "name",  type: "text",  placeholder: "Jane Smith" },
  { label: "Email",     key: "email", type: "email", placeholder: "jane@example.com" },
  { label: "Phone",     key: "phone", type: "tel",   placeholder: "(555) 000-0000" },
];

const initialState: FormState = { success: false };

export default function ApplyForm() {
  const isMobile = useIsMobile();
  const [state, formAction, pending] = useActionState(submitApplication, initialState);

  return (
    <section id="apply" style={{
      background: "#0a0f12",
      padding: isMobile ? "64px 1.5rem" : "100px 4rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 48 : 80,
        alignItems: "center",
      }}>
        {/* Left copy */}
        <div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: isMobile ? "clamp(3rem, 14vw, 4.5rem)" : "clamp(3.5rem, 6vw, 6rem)",
            lineHeight: 0.9, color: "#fff", marginBottom: 20, letterSpacing: "1px",
          }}>
            READY TO<br /><span style={{ color: "#17a7ce" }}>GET STARTED?</span>
          </h2>
          <p style={{ color: "#6b8a96", fontSize: "0.93rem", lineHeight: 1.75, marginBottom: 28 }}>
            Fill in your details and an orders2me representative will be in touch
            within 24 hours to walk you through the opportunity.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#9ab5c0", fontSize: "0.85rem" }}>
            <span>Or call us —</span>
            <Link href="tel:8008811622" style={{ color: "#17a7ce", textDecoration: "none", fontWeight: 600 }}>
              (800) 881-1622
            </Link>
          </div>
        </div>

        {/* Right — form or success */}
        {state.success ? (
          <div style={{
            textAlign: "center", padding: "60px 40px",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16,
          }}>
            <div style={{ fontSize: "2.5rem", color: "#17a7ce", marginBottom: 16 }}>✓</div>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "3rem", color: "#fff", marginBottom: 10,
            }}>
              YOU&apos;RE IN
            </h3>
            <p style={{ color: "#6b8a96", fontSize: "0.9rem", lineHeight: 1.6 }}>
              We&apos;ll be in touch within 24 hours.<br />
              Questions? Call{" "}
              <Link href="tel:8008811622" style={{ color: "#17a7ce", textDecoration: "none" }}>
                (800) 881-1622
              </Link>
            </p>
          </div>
        ) : (
          <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "#fff", padding: "13px 16px", borderRadius: 8,
                    fontSize: "0.92rem", fontFamily: "DM Sans, sans-serif", outline: "none",
                  }}
                />
              </div>
            ))}

            {/* Error message */}
            {state.error && (
              <p style={{
                color: "#ff6b6b", fontSize: "0.82rem",
                background: "rgba(255,107,107,0.08)",
                border: "1px solid rgba(255,107,107,0.2)",
                padding: "10px 14px", borderRadius: 8, margin: 0,
              }}>
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              style={{
                background: "#17a7ce", color: "#fff", padding: "15px",
                borderRadius: 8, border: "none", fontSize: "0.95rem",
                fontWeight: 600, cursor: pending ? "not-allowed" : "pointer",
                fontFamily: "DM Sans, sans-serif", marginTop: 8,
                opacity: pending ? 0.6 : 1, transition: "opacity 0.15s",
              }}
            >
              {pending ? "Submitting..." : "Become a Distributor →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}