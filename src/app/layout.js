import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/Header.component";
import { Footer } from "./components/layout/footer/Footer.component";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
