import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar goes here */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
