import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import axios from "axios";

// components :
import Navbar from "@/components/Navbar";

// css :
import "./backoffice.style.css";
import { Separator } from "@/components/ui/separator";

export default function BackOffice() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      await axios({
        method: "post",
        url: "http://localhost:10051/authentification",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then((res: any) => {
        res.data.code === 1 ? null : navigate("/");
      });
    };

    checkAuth();
  }, [token, navigate]);

  return (
    <section className="backoffice">
      <Navbar />
      <div className="bottom">
        <div className="sidenav">
          <ul>
            <li>
              <Link to={"/personel"}>Informations personnel</Link>
            </li>
            <Separator className="bg-primary-foreground" />
            <li>
              <Link to={"gestion"}>Gestion de contenu</Link>
            </li>
            <Separator className="bg-primary-foreground" />
            <li>
              <Link to={"/personel/positionnement"}>Positionnement</Link>
            </li>
            <Separator className="bg-primary-foreground" />
            <li>
              <Link to={""}>Paramètres</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
