import { ImageResponse } from "next/og";

export const alt = "WanderLux Travel — Find your somewhere";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "linear-gradient(125deg, #0D3B4E 0%, #1B6CA8 58%, #93C8E8 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "68px 76px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700, gap: 16 }}>
          <div
            style={{
              alignItems: "center",
              border: "3px solid #F5A623",
              borderRadius: "50%",
              color: "#F5A623",
              display: "flex",
              fontSize: 26,
              height: 52,
              justifyContent: "center",
              width: 52,
            }}
          >
            W
          </div>
          WanderLux
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
          <div style={{ color: "#F5A623", fontSize: 22, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase" }}>
            Travel, a little more personally
          </div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 80, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, marginTop: 24 }}>
            Find your somewhere.
          </div>
          <div style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 28, lineHeight: 1.45, marginTop: 25 }}>
            Thoughtful journeys, shaped around you.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", color: "rgba(255, 255, 255, 0.72)", fontSize: 21, gap: 18 }}>
          <div style={{ background: "#F5A623", height: 2, width: 56 }} />
          50+ countries explored · 12k+ happy travellers
        </div>
        <div
          style={{
            background: "rgba(245, 166, 35, 0.16)",
            border: "1px solid rgba(245, 166, 35, 0.45)",
            borderRadius: "50%",
            height: 520,
            position: "absolute",
            right: -220,
            top: -190,
            width: 520,
          }}
        />
      </div>
    ),
    size,
  );
}
