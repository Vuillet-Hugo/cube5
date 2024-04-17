import { Link, useNavigate } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { SignInForm } from "./form/signIn";
import { SignUpForm } from "./form/signUp";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  console.log(localStorage.getItem("token"));
  const [token] = useState<string | null>(
    localStorage.getItem("token") || null
  );
  const navigate = useNavigate();
  const [sign, setSign] = useState<boolean | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth);
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
        console.log(res.data.code);
        res.data.code === 1 ? setIsAuth(true) : setIsAuth(false);
      });
    };
    checkAuth();
  }, []);
  function loginBtn() {
    return (
      <MenubarContent>
        <SheetTrigger
          asChild
          onClick={() => {
            setSign(true);
          }}
        >
          <MenubarItem>Connexion</MenubarItem>
        </SheetTrigger>
        <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
        <DialogTrigger
          asChild
          onClick={() => {
            setSign(false);
          }}
        >
          <MenubarItem>Inscription</MenubarItem>
        </DialogTrigger>
      </MenubarContent>
    );
  }
  function logoutBtn() {
    return (
      <MenubarContent>
        <MenubarItem>
          <Link to={"/personel"} style={{ height: "100%", width: "100%" }}>
            DashBoard
          </Link>
        </MenubarItem>
        <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
        <MenubarItem
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
            setIsAuth(false);
          }}
        >
          Deconnexion
        </MenubarItem>
      </MenubarContent>
    );
  }
  return (
    <div className=" bg-primary min-h-28 w-full flex items-center justify-between">
      <div className="flex items-center ml-7">
        <Button className="min-h-20 min-w-36 m-4 bg-cesi-jaune bg-cover bg-center">
          <Link to={"/"} style={{ height: "100%", width: "100%" }}></Link>
        </Button>
        <Menubar className="max-w-96 ml-16">
          <MenubarMenu>
            <MenubarTrigger className=" hover:cursor-pointer">
              <Link to={"/formations"}>Nos Diplômes</Link>
            </MenubarTrigger>
            {/* <MenubarContent>
              <MenubarItem>Bac +2</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Bac +3</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Bac +5</MenubarItem>
            </MenubarContent> */}
          </MenubarMenu>
          {/* <MenubarMenu>
            <MenubarTrigger className=" hover:cursor-pointer">Domaines</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Développement</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Maintenance et réseaux</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Rh & Management</MenubarItem>
            </MenubarContent>
          </MenubarMenu> */}
          <MenubarMenu>
            <MenubarTrigger className=" hover:cursor-pointer">
              Admissions
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Programme grandes écoles</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Niveau recommandé</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Reconnaissance</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className=" hover:cursor-pointer">
              Campus
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Ile-de-France</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Grand-Est</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Sud-Est</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Ouest</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex mr-16">
        <Input className="min-w-72" placeholder="Rechercher un programme" />
        <Button variant="outline" className="ml-2 bg-secondary text-black">
          Rechercher
        </Button>
      </div>
      <Dialog>
        <Sheet>
          <Menubar className="mr-7">
            <MenubarMenu>
              <MenubarTrigger className=" hover:cursor-pointer">
                Espace intervenant
              </MenubarTrigger>
              {isAuth ? logoutBtn() : loginBtn()}
            </MenubarMenu>
          </Menubar>
          {sign ? (
            <SheetContent>
              <SignInForm setIsAuth={setIsAuth} />
            </SheetContent>
          ) : (
            <DialogContent className="h-screen">
              <ScrollArea className="h-screen p-4">
                <SignUpForm />
              </ScrollArea>
            </DialogContent>
          )}
        </Sheet>
      </Dialog>
    </div>
  );
}
