import NavBar from "./_components/Navbar/Navbar";
import "../app/globals.css";
import Footer from "./_components/Footer/Footer";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header className="p-5 sticky top-0 shadow z-20 bg-white">
          <div className="max-w-7xl mx-auto ">
            <NavBar />
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
