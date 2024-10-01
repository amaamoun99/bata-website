// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/wrappers/NavBarWrapper";
import Footer from "@/components/Footer";
import Cart from "@/components/wrappers/CartWrapper";



export default function RootLayout({ children }) {
  return (
    //<Provider store={store}>
    <html lang="en">
      <body>
        <NavBar/>
        <Cart/>
          {children}
        <Footer/>
      </body>
    </html>
    //</Provider>
  );
}
