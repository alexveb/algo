import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import DSymb2023 from "./pages/dsymb2023";
import PrevDSymboulia from "./pages/previousdsymb";
import Aitisi from "./pages/aitisi_eggrafis_melous";

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
    element: <DSymb2023 />,
  },
  {
    path: "/dsymboulia1994-2023",
    element: <PrevDSymboulia />,
  },
  {
    path: "/aitisi-eggrafis-melous",
    element: <Aitisi />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
