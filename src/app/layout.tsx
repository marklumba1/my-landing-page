import NavBar from "./_components/Navbar/Navbar";
import  "../app/globals.css"
const RootLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <html lang="en">
            <body>
                <header className="max-w-7xl mx-auto p-5">
                    <NavBar />
                </header>
                <main>
                    {children}
                </main>
                <footer className="max-w-7xl mx-auto p-5">
                    Footer
                </footer>
            </body>
        </html>
    )
}

export default RootLayout;