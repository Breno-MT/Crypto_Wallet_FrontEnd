import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
