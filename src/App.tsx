import Navbar from "./components/Navbar";
import ToolBar from "./components/ToolBar";
// import { SignUpForm } from "./components/form/signUp";
// import axios from 'axios';
// const apiUrl = import.meta.env.VITE_API_URL

function App() {
  // axios.get(apiUrl+ "authentification").then((response) => {
  //   console.log(response.data);
  // });
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
