import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0067FF 0%, #0F172A 100%)",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            fontSize: 108,
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          B
        </div>
      </div>
    ),
    { ...size }
  );
}
