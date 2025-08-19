import NavBar from "./_components/Navbar/Navbar";
import  "../app/globals.css"
const RootLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <NavBar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </body>
        </html>
    )
}

export default RootLayout;