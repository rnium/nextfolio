import Navbar from "../components/nav/Navbar";

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
      <main className="mx-20 px-4 mt-10 py-5">
        {children}
      </main>
    </>
  );
}
