"use client";

const Footer = () => (
    <footer className="bg-slate-800 py-10">
        <div className="container mx-auto px-4 flex flex-col items-center">
            <p className="text-3xl text-white mb-2 drop-shadow-lg">
                &copy; {new Date().getFullYear()} Mark Lumba
            </p>
        </div>
    </footer>
);

export { Footer };
