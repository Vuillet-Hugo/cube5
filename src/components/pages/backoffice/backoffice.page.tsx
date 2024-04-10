import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import axios from "axios";

// components :
import Navbar from "@/components/Navbar";

// css :
import "./backoffice.style.css";

export default function BackOffice() {
  const [token, setToken] = useState<string>(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3MTI3MzYxNTEsImlhdCI6MTcxMjczNjE1MSwianRpIjoidW5pcXVlX2lkIiwiZGF0YSI6eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIn19.siVoC5rxu7tDJsSDwaBThIzIrWG6EO09mDeTZQBOQVc"
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
  }, []);

  return (
    <section className="backoffice">
      <Navbar />
      <div className="bottom">
        <div className="sidenav">
          <ul>
            <li>
              <Link to={""}>Étudiants</Link>
            </li>
            <li>
              <Link to={""}>Informations personnel</Link>
            </li>
            <li>
              <Link to={""}>Positionnement</Link>
            </li>
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
