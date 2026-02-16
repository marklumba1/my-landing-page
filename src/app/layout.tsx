import NavBar from "./_components/Navbar/Navbar";
import navBarData from "./_components/Navbar/Navbar.data"
import "../app/globals.css";
import Footer from "./_components/Footer/Footer";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NavBar {...navBarData}/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
