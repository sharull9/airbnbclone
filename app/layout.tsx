import Footer from "./components/Footer";
import PopUp from "./components/modals/PopUp";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <PopUp
          isOpen
          actionLabel="Submit"
          onClose={() => {}}
          onSubmit={() => {}}
          secondaryAction={() => {}}
          secondaryActionLabel="Login"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
