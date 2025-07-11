import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./components/Rootlayout.tsx";
import AnalyzeDDi from "./pages/analyseDDI.tsx";
import DatasetsPage from "./pages/datasets.tsx";
import { WEB_ROUTES } from "./consts/routes.ts";
import DDIInfoPage from "./pages/about.tsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const queryClient = new QueryClient();
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path={WEB_ROUTES.extract} element={<AnalyzeDDi />} />
            <Route path={WEB_ROUTES.datasets} element={<DatasetsPage />} />
            <Route path={WEB_ROUTES.about} element={<DDIInfoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
