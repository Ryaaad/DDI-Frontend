import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./components/Sidebar";
import AnalyzeDDi from "./pages/analyseDDI";
import { Toaster } from "sonner";
import DatasetsPage from "./pages/datasets";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen bg-gray-100">
        <Toaster richColors />
        <Sidebar />
        <div className="w-full flex-1 max-h-screen overflow-y-scroll">
          <DatasetsPage />
        </div>
        {/* <AnalyzeDDi /> */}
      </div>
    </QueryClientProvider>
  );
};

export default App;
