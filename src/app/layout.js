import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Nissan GT-R 2023",
  description:
    "Discover the Nissan GT-R R35 in stunning 3D on our interactive website. Explore every detail of this legendary supercar with a high-quality, immersive 3D model.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}
