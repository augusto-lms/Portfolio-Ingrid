import { ImageResponse } from "next/og";

export const alt = "Ingrid Hovsepian — Neurologia com clareza e ciência";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", padding: "70px", position: "relative", background: "#f6f3ec", color: "#282821" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid rgba(40,40,33,.18)", padding: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "25px" }}>
          <div style={{ width: "62px", height: "62px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", color: "#f6f3ec", background: "#504c37", fontSize: "24px", fontStyle: "italic" }}>IH</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Ingrid Hovsepian</span>
            <span style={{ marginTop: "5px", color: "#89805f", fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase" }}>Neurologia</span>
          </div>
        </div>
        <div style={{ maxWidth: "880px", display: "flex", flexDirection: "column", fontSize: "68px", lineHeight: 1.02, letterSpacing: "-2px" }}>
          <span>O cérebro é complexo.</span>
          <span style={{ color: "#89805f", fontStyle: "italic" }}>Falar sobre ele não precisa ser.</span>
        </div>
        <div style={{ color: "#68665c", fontSize: "19px" }}>Conteúdo com clareza e baseado em ciência.</div>
      </div>
    </div>,
    size,
  );
}
