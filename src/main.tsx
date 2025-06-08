import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./components/Rootlayout.tsx";
import AnalyzeDDi from "./pages/analyseDDI.tsx";
import DatasetsPage from "./pages/datasets.tsx";
import { WEB_ROUTES } from "./consts/routes.ts";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path={WEB_ROUTES.extract} element={<AnalyzeDDi />} />
            <Route path={WEB_ROUTES.datasets} element={<DatasetsPage />} />
            <Route path={WEB_ROUTES.about} element={<DatasetsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
