import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import DSymb from "./pages/dsymb";
import PrevDSymboulia from "./pages/previousdsymb";
import Aitisi from "./pages/aitisi_eggrafis_melous";
import Education from "./pages/education";
import PublicationsEEA from "./pages/publicationsEEA";
import PublicationsEEA2018 from "./pages/publicationsEEA2018";
import DontSuffer from "./pages/DOnotSUFFERinSILENCE";
import InMemory from "./pages/inMemory";
import PublicationsRecommendations from "./pages/Publications_Recommendations";
import posthog from "posthog-js";

posthog.init("phc_A8YgxiNCT4Kfx8y4XyfCdsJRoCNo8yMdbea3juKMIS8", {
  api_host: "https://app.posthog.com",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dsymboulio2023-2026",
    element: <DSymb />,
  },
  {
    path: "/dsymboulia1994-2023",
    element: <PrevDSymboulia />,
  },
  {
    path: "/aitisi-eggrafis-melous",
    element: <Aitisi />,
  },
  {
    path: "/Education",
    element: <Education />,
  },
  {
    path: "/PublicationsEEA",
    element: <PublicationsEEA />,
  },
  {
    path: "/PublicationsEEA2018",
    element: <PublicationsEEA2018 />,
  },
  {
    path: "/do_not_suffer_in_silence",
    element: <DontSuffer />,
  },
  {
    path: "/inMemory",
    element: <InMemory />,
  },
  {
    path: "/Publications_Recommendations",
    element: <PublicationsRecommendations />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
