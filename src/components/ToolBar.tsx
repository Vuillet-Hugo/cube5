import {
  CalendarDays,
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
import { RefObject } from "react";
export type ToolBarProps = {
  events: RefObject<HTMLElement>;
  actualites: RefObject<HTMLElement>;
  about: RefObject<HTMLElement>;
  contact: RefObject<HTMLElement>;
};
export default function ToolBar(props: ToolBarProps) {
  const { about, actualites, events, contact } = props;
  const scrollIntoView = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col w-16 bg-secondary min-h-screen min-w-60 justify-between">
      <div className="flex flex-col ml-4 pt-16 mr-6">
        <div className="text-lg hover:text-primary hover:cursor-pointer flex">
          <Home size={20} className="mr-3 mt-1" /> Accueil
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div
          onClick={() => scrollIntoView(about)}
          className="text-lg hover:text-primary hover:cursor-pointer flex"
        >
          <History size={20} className="mr-3 mt-1" />A propos
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div
          className="text-lg hover:text-primary hover:cursor-pointer flex"
          onClick={() => scrollIntoView(actualites)}
        >
          <Newspaper size={20} className="mr-3 mt-1" />
          Actualités
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div
          onClick={() => scrollIntoView(events)}
          className="text-lg hover:text-primary hover:cursor-pointer flex"
        >
          <CalendarDays size={20} className="mr-3 mt-1" /> Evenements
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div
          onClick={() => scrollIntoView(contact)}
          className="text-lg hover:text-primary hover:cursor-pointer flex"
        >
          <Send size={20} className="mr-3 mt-1" /> Nous contacter
        </div>
        <Separator className="my-4 bg-primary-foreground" />
        <div className="text-lg hover:text-primary hover:cursor-pointer flex">
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
