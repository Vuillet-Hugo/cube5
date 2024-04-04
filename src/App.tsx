import Navbar from "./components/Navbar";
import ToolBar from "./components/ToolBar";
import Actualites from "./components/accueil/Actualites";
import IntroCard from "./components/accueil/IntroCard";
import StatsCard from "./components/accueil/StatsCard";
import { Separator } from "./components/ui/separator";
// import { useUser } from "./providers/data.provider";

function App() {
  // const { userData } = useUser();
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="flex flex-row">
        <ToolBar />
        <div className="flex grow flex-col">
          <div className="min-w-full h-96 bg-banniere-cesi bg-cover rounded" />
          <div className="text-5xl ml-12 mt-12">
            CESI, au cœur des enjeux d’aujourd’hui
          </div>
          <Separator className="w-60 mt-3 ml-14 bg-primary-foreground h-2" />
          <IntroCard />
          <StatsCard />
          <div className="text-5xl ml-12 mt-12">Actualités</div>
          <Separator className="w-28 mt-3 ml-14 bg-primary-foreground h-2" />
          <Actualites />
          <div className="text-5xl ml-12 mt-12">
            Événements, journées portes ouvertes…
          </div>
          <Separator className="w-72 mt-3 ml-14 bg-primary-foreground h-2" />
        </div>
      </div>
    </div>
  );
}

export default App;
