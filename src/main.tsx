import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./components/Rootlayout.tsx";
import AnalyzeDDi from "./pages/analyseDDI.tsx";
import DatasetsPage from "./pages/datasets.tsx";

const queryClient = new QueryClient();
const routes = { extract: "/", datasets: "/datasets" };
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path={routes.extract} element={<AnalyzeDDi />} />
            <Route path={routes.datasets} element={<DatasetsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
