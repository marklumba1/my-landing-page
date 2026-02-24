import NavBar from "./_components/Navbar/Navbar";
import "../app/globals.css";
import navBarData from "./_data/Navbar.data";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NavBar {...navBarData}/>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
