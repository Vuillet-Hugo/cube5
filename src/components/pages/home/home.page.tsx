import Navbar from "@/components/Navbar";
import Footer from "@/components/accueil/Footer";

import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="homepage">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
