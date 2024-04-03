import Navbar from "./components/Navbar";
import ToolBar from "./components/ToolBar";
import { useUser } from "./providers/data.provider";

function App() {
  const { userData } = useUser();
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <ToolBar />
        <div className="flex grow">{/* Contenue de la page d'accueil */}</div>
      </div>
    </div>
  );
}

export default App;
