import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DSymb from "../pages/dsymb";
import PrevDSymboulia from "../pages/previousdsymb";
import Aitisi from "../pages/aitisi_eggrafis_melous";
import Education from "../pages/education";
import PublicationsEEA from "../pages/publicationsEEA";
import PublicationsEEA2018 from "../pages/publicationsEEA2018";
import DontSuffer from "../pages/DOnotSUFFERinSILENCE";
import InMemory from "../pages/inMemory";
import PublicationsRecommendations from "../pages/Publications_Recommendations";
import GreekConferencesAndEvents from "../pages/GreekConferencesAndEvents";
import InternationalConferencesAndEvents from "../pages/InternationalConferencesAndEvents";
import ImeridaAlgologias from "../pages/ImeridaAlgologias";
import EEATrikala from "../pages/EEATrikala";
import BiggestPainEdu from "../pages/BiggestPainEducationEvent";
import IASP from "../pages/IASP";
import Main from "../pages/Home/Main";
import Article1 from "../pages/Home/Links/Article1";
import Article2 from "../pages/Home/Links/Article2";
import Article3 from "../pages/Home/Links/Article3";
import Article4 from "../pages/Home/Links/Article4";
import Article5 from "../pages/Home/Links/Article5";
import Article6 from "../pages/Home/Links/Article6";
import Article7 from "../pages/Home/Links/Article7";
import Article8 from "../pages/Home/Links/Article8";
import Register from "../pages/register";
import Login from "../pages/login";
import Forum from "../pages/algologiaForum";
import AdminPanel from "./AdminPanel";
import Checkbox from "./CountDown";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/dsymboulio2023-2026" element={<DSymb />} />
        <Route path="/dsymboulia1994-2023" element={<PrevDSymboulia />} />
        <Route path="/aitisi-eggrafis-melous" element={<Aitisi />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/PublicationsEEA" element={<PublicationsEEA />} />
        <Route path="/PublicationsEEA2018" element={<PublicationsEEA2018 />} />
        <Route path="/do_not_suffer_in_silence" element={<DontSuffer />} />
        <Route path="/inMemory" element={<InMemory />} />
        <Route
          path="/Publications_Recommendations"
          element={<PublicationsRecommendations />}
        />
        <Route
          path="/GreekConferencesAndEvents"
          element={<GreekConferencesAndEvents />}
        />
        <Route
          path="/InternationalConferencesAndEvents"
          element={<InternationalConferencesAndEvents />}
        />
        <Route path="/ImeridaAlgologias" element={<ImeridaAlgologias />} />
        <Route path="/EEATrikala" element={<EEATrikala />} />
        <Route
          path="/BePartoftheBiggestPainEducationEventin2020"
          element={<BiggestPainEdu />}
        />
        <Route path="/IASP" element={<IASP />} />
        <Route path="/Article1" element={<Article1 />} />
        <Route path="/Article2" element={<Article2 />} />
        <Route path="/Article3" element={<Article3 />} />
        <Route path="/Article4" element={<Article4 />} />
        <Route path="/Article5" element={<Article5 />} />
        <Route path="/Article6" element={<Article6 />} />
        <Route path="/Article7" element={<Article7 />} />
        <Route path="/Article8" element={<Article8 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/algologiaForum" element={<Forum />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/countdown" element={<Checkbox />} />
      </Routes>
    </Router>
  );
}

export default App;
