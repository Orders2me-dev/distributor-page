import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #e4ecef", padding: "28px 4rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: 12,
    }}>
      <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "#0a0f12" }}>
        orders<span style={{ color: "#17a7ce" }}>2me</span>
      </span>
      <span style={{ fontSize: "0.75rem", color: "#6b7f89" }}>
        All products subject to terms. See{" "}
        <Link href="https://orders2me.com" style={{ color: "#17a7ce", textDecoration: "none", fontWeight: 600 }}>
          orders2me.com
        </Link>{" "}
        for details.
      </span>
      <Link href="tel:8888700017" style={{ color: "#17a7ce", textDecoration: "none", fontSize: "0.75rem", fontWeight: 600 }}>
        (888) 870-0017
      </Link>
    </footer>
  );
}