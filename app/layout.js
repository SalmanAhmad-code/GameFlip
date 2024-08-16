import { Inter } from "next/font/google";
import "./globals.css";
import NavBar2 from "./components/NavBar2";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GameFlip",
  description: "GameFlip is a flashcard platform for gamers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Playwrite+AR:wght@100..400&family=Playwrite+HR+Lijeva:wght@100..400&family=Press+Start+2P&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className}`}>
        <NavBar2 />
        {children}
        <Footer/>
      </body> 
    </html>
  );
}
