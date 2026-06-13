import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(60% 60% at 80% 20%, rgba(245,166,35,0.18), transparent 60%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#f5a623",
            }}
          />
          <div
            style={{
              display: "flex",
              color: "#a1a1aa",
              fontSize: 26,
              letterSpacing: 4,
            }}
          >
            PORTFOLIO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#fafafa",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            Hamza Tanveer
          </div>
          <div
            style={{
              display: "flex",
              color: "#d4d4d8",
              fontSize: 36,
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            Full-stack &amp; mobile developer building Flutter apps and
            AI-powered platforms.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["HeyInterests", "AIumni", "Flutter", "Next.js", "AI"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                color: "#d4d4d8",
                fontSize: 26,
                border: "1px solid #27272a",
                borderRadius: 999,
                padding: "10px 22px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
