import {
  Cookie,
  Facebook,
  History,
  Home,
  Instagram,
  Linkedin,
  Newspaper,
  Scale,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { Separator } from "./ui/separator";

export default function ToolBar() {
  return (
    <div className="flex flex-col w-16 bg-secondary min-h-screen min-w-60 justify-between">
      <div className="flex flex-col ml-4 pt-16 mr-6">
        <div className="text-lg hover:text-primary flex">
          <Home size={20} className="mr-3 mt-1" /> Accueil
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div className="text-lg hover:text-primary flex">
          <History size={20} className="mr-3 mt-1" />A propos
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div className="text-lg hover:text-primary flex">
          <Newspaper size={20} className="mr-3 mt-1" />
          Actualités
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div className="text-lg hover:text-primary flex">
          <Send size={20} className="mr-3 mt-1" /> Nous contacter
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div className="text-lg hover:text-primary flex">
          <Cookie size={20} className="mr-3 mt-1" />
          Politique de cookies
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div className="text-lg hover:text-primary flex">
          <Scale size={20} className="mr-3 mt-1" />
          Mentions légales
        </div>
      </div>
      <div className="flex sticky bottom-5">
        <Facebook
          size={28}
          className="ml-4 bg-primary-foreground rounded-xl p-1"
        />
        <Twitter
          size={28}
          className="ml-4 bg-primary-foreground rounded-xl p-1"
        />
        <Linkedin
          size={28}
          className="ml-4 bg-primary-foreground rounded-xl p-1"
        />
        <Instagram
          size={28}
          className="ml-4 bg-primary-foreground rounded-xl p-1"
        />
        <Youtube
          size={28}
          className="ml-4 bg-primary-foreground rounded-xl p-1"
        />
      </div>
    </div>
  );
}
