import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 4rem", height: 58,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid #e4ecef",
    }}>
      <span style={{ fontWeight: 600, fontSize: "1.05rem", color: "#0a0f12" }}>
        orders<span style={{ color: "#17a7ce" }}>2me</span>
      </span>
      <Link href="tel:8888700017" style={{
        background: "#17a7ce", color: "#fff", padding: "7px 20px",
        borderRadius: 6, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none",
      }}>
        Call +1 800-881-1622
      </Link>
    </nav>
  );
}