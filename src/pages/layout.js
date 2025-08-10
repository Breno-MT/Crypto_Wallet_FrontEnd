import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
