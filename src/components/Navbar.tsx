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
import { SignUpForm } from "./form/signUp";
import { ScrollArea } from "./ui/scroll-area";

export default function Navbar() {
  return (
    <div className=" bg-primary min-h-28 w-full flex items-center justify-between">
      <div className="flex items-center ml-7">
        <Button className="min-h-20 min-w-36 m-4 bg-cesi-jaune bg-cover bg-center"></Button>
        <Menubar className="max-w-96 ml-16">
          <MenubarMenu>
            <MenubarTrigger>Programmes</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Bac +2</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Bac +3</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Bac +5</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Domaines</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Développement</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Maintenance et réseaux</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Rh & Management</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Admissions</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Programme grandes écoles</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Niveau recommandé</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <MenubarItem>Reconnaissance</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Campus</MenubarTrigger>
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
        <Menubar className="mr-7">
          <MenubarMenu>
            <MenubarTrigger>Espace intervenant</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Connexion</MenubarItem>
              <MenubarSeparator className="bg-primary-foreground mr-2 ml-2" />
              <DialogTrigger>
                <MenubarItem>Inscription</MenubarItem>
              </DialogTrigger>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <DialogContent className="h-screen">
          <ScrollArea className="h-screen p-4">
            <SignUpForm />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
