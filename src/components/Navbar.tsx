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

export default function Navbar() {
  return (
    <div className=" bg-primary min-h-28 w-full flex items-center justify-between">
      <div className="flex items-center ml-7">
        <Button className="min-h-20 min-w-36 m-4 bg-gray-200 text-black">
          Logo SVG
        </Button>
        <Menubar className="max-w-96 ml-16">
          <MenubarMenu>
            <MenubarTrigger>Programmes</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Bac +2</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Bac +3</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Bac +5</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Domaines</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Développement</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Maintenance et réseaux</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Rh & Management</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Admissions</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Programme grandes écoles</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Niveau recommandé</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Reconnaissance</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Campus</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Ile-de-France</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Grand-Est</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Sud-Est</MenubarItem>
              <MenubarSeparator />
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
        <Menubar className="mr-7">
          <MenubarMenu>
            <MenubarTrigger>Espace intervenant</MenubarTrigger>
            <MenubarContent>
              <DialogTrigger>
                <MenubarItem>Connexion</MenubarItem>
              </DialogTrigger>
              <MenubarSeparator />
              <MenubarItem>Inscription</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <DialogContent>
          <SignInForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
