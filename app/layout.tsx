import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Media Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function generateHarmoniousColors() {
              // 生成基础色相 (0-360)
              const baseHue = Math.random() * 360;
              
              // 生成三个相邻但不同的色相（120度分隔，形成三角色彩）
              const hue1 = baseHue;
              const hue2 = (baseHue + 120) % 360;
              const hue3 = (baseHue + 240) % 360;
              
              // 使用固定的饱和度和亮度范围以确保颜色和谐
              const saturation = 70 + Math.random() * 20; // 70-90%
              const lightness = 60 + Math.random() * 20;  // 60-80%
              const alpha = 0.4;  // 固定透明度

              // 设置CSS变量
              document.documentElement.style.setProperty(
                '--circle-1-color',
                \`hsla(\${hue1}, \${saturation}%, \${lightness}%, \${alpha})\`
              );
              document.documentElement.style.setProperty(
                '--circle-2-color',
                \`hsla(\${hue2}, \${saturation}%, \${lightness}%, \${alpha})\`
              );
              document.documentElement.style.setProperty(
                '--circle-3-color',
                \`hsla(\${hue3}, \${saturation}%, \${lightness}%, \${alpha})\`
              );
            }
            generateHarmoniousColors();
          `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
