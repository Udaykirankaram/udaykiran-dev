import "./globals.css";

export const metadata = {
  title: "MERN Stack Developer Portfolio",
  description:
    "Modern portfolio website for a MERN Stack Developer skilled in React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
  keywords: [
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}