import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";
import SocialNav from "../components/(micro)/SocialNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative z-40">
        <Navbar />
      </div>
      <main className="mx-1 px-4 mt-10 py-7 md:mx-28">
        <SocialNav />
        {children}
      </main>
      <div className="border-t-2 border-slate-400 bg-slate-400/10">
        <div className="mx-1 md:mx-28 mt-3 px-4 py-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
