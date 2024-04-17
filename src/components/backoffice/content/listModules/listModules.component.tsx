import { IFormModule } from "../content.component";
import "./listModules.style.css";

interface ListModuleProps {
  modules: IFormModule[];
  editSetter: (index: number) => void;
  deleteSetter: (index: number) => void;
}

export default function ListModules(props: ListModuleProps) {
  const { modules, editSetter, deleteSetter } = props;
  return (
    <div className="list-modules">
      <ul>
        <div>
          <p>Nom du Module</p>
          <p>Durée du module</p>
          <p>Référence</p>
          <span></span>
          <span></span>
        </div>
        {modules &&
          modules.map((module, index) => (
            <li key={module._id}>
              <p>{module.nomModule}</p>
              <p>{module.dureeModule}</p>
              <p>{module.reference}</p>
              <button type="button">
                <p onClick={() => editSetter(index)}>...</p>
              </button>
              <button type="button">
                <p onClick={() => deleteSetter(index)}>X</p>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
