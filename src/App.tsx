import Sidebar from "./components/Sidebar";
import AnalyzeDDi from "./pages/analyseDDI";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <AnalyzeDDi />
    </div>
  );
};

export default App;
