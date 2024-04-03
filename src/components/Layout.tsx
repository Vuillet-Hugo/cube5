import Navbar from "./Navbar";
import ToolBar from "./ToolBar";

export default function Layout() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <ToolBar />
        </div>
    )
    }