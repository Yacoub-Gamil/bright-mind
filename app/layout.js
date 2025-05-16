import Footer from "./_components/Footer";
import Header from "./_components/header/Header";
import "./globals.css";

export const metadata = {
  title: {
    template: "Bright-mind %s",
    default: " Bright-mind",
  },
  descripiton:
    "BrightMind empowers learners with expert-led courses to grow skills, advance careers, and achieve success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
