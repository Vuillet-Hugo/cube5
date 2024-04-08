import Navbar from "@/components/Navbar";

import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="homepage">
      <Navbar />
      <Outlet />
    </section>
  );
}
