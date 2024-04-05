import { useRef } from "react";
import Navbar from "./components/Navbar";
import ToolBar from "./components/ToolBar";
import Actualites from "./components/accueil/Actualites";
import IntroCard from "./components/accueil/IntroCard";
import StatsCard from "./components/accueil/StatsCard";
import Evenements from "./components/accueil/evenements";
import { Separator } from "./components/ui/separator";
import Contacts from "./components/accueil/Contacts";
import ScrollToTopButton from "./components/accueil/ScrollToTopBtn";
// import { useUser } from "./providers/data.provider";

function App() {
  // const { userData } = useUser();
  const scrollActualites = useRef(null);
  const scrollEvents = useRef(null);
  const scrollAbout = useRef(null);
  const scrollContact = useRef(null);
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="flex flex-row">
        <ToolBar
          about={scrollAbout}
          actualites={scrollActualites}
          events={scrollEvents}
          contact={scrollContact}
        />
        <div className="flex grow flex-col">
          <div className="min-w-full h-96 bg-banniere-cesi bg-cover rounded" />
          <div className="text-5xl ml-12 mt-12" ref={scrollAbout}>
            CESI, au cœur des enjeux d’aujourd’hui
          </div>
          <Separator className="w-60 mt-3 ml-14 bg-primary-foreground h-2" />
          <IntroCard />
          <StatsCard />
          <div className="text-5xl ml-12 mt-12" ref={scrollActualites}>
            Actualités
          </div>
          <Separator className="w-28 mt-3 ml-14 bg-primary-foreground h-2" />
          <Actualites />
          <div className="text-5xl ml-12 mt-12" ref={scrollEvents}>
            Événements, journées portes ouvertes…
          </div>
          <Separator className="w-72 mt-3 ml-14 bg-primary-foreground h-2" />
          <Evenements />
          <div className="text-5xl ml-12 mt-12" ref={scrollContact}>
            S'engager, Accompagner
          </div>
          <Separator className="w-72 mt-3 ml-14 bg-primary-foreground h-2" />
          <Contacts />
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
}

export default App;
