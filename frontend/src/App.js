import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Contact from "./pages/Contact.jsx";
import Historique from "./pages/Historique.jsx";
import Benevole from "./pages/Benevole.jsx";
import Admin from "./pages/Admin.jsx";
import ErrorBoundary from "./ErrorBoundary.js";
import Aikido from "./pages/sports/Aikido.jsx";
import Athletisme from "./pages/sports/Athletisme.jsx";
import Badminton from "./pages/sports/Badminton.jsx";
import BasketBall from "./pages/sports/Basketball.jsx";
import BoxeThailandaise from "./pages/sports/BoxeThailandaise.jsx";
import Capoeira from "./pages/sports/Capoeira.jsx";
import EcoleDeDanse from "./pages/sports/EcoleDeDanse.jsx";
import EcoleDesSports from "./pages/sports/EcoleDesSports.jsx";
import Escrime from "./pages/sports/Escrime.jsx";
import Fitness from "./pages/sports/FitnessGymBienetre.jsx";
import Football from "./pages/sports/Football.jsx";
import GymnastiqueArtistique from "./pages/sports/GymnastiqueArtistique.jsx";
import GymnastiqueRythmique from "./pages/sports/GymnastiqueRythmique.jsx";
import Handball from "./pages/sports/Handball.jsx";
import JudoJuJitsu from "./pages/sports/JudoJuJitsu.jsx";
import Karate from "./pages/sports/Karate.jsx";
import KungFu from "./pages/sports/KungFu.jsx";
import MarcheNordique from "./pages/sports/MarcheNordique.jsx";
import Natation from "./pages/sports/Natation.jsx";
import Parkour from "./pages/sports/Parkour.jsx";
import Rugby from "./pages/sports/Rugby.jsx";
import Squash from "./pages/sports/Squash.jsx";
import TaeKwonDo from "./pages/sports/TaeKwonDo.jsx";
import Tennis from "./pages/sports/Tennis.jsx";
import TennisDeTable from "./pages/sports/TennisDeTable.jsx";
import VolleyBall from "./pages/sports/VolleyBall.jsx";
import Yoga from "./pages/sports/Yoga.jsx";
import Menu from "./components/Menu.jsx";
import Construction from "./pages/Construction.jsx";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="/benevole" element={<Benevole />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/aikido" element={<Aikido />} />
            <Route path="/athletisme" element={<Athletisme />} />
            <Route path="/badminton" element={<Badminton />} />
            <Route path="/basketball" element={<BasketBall />} />
            <Route path="/boxethailandaise" element={<BoxeThailandaise />} />
            <Route path="/capoeira" element={<Capoeira />} />
            <Route path="/ecolededanse" element={<EcoleDeDanse />} />
            <Route path="/ecoledessports" element={<EcoleDesSports />} />
            <Route path="/escrime" element={<Escrime />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/football" element={<Football />} />
            <Route
              path="/gymnastiqueartistique"
              element={<GymnastiqueArtistique />}
            />
            <Route
              path="/gymnastiquerythmique"
              element={<GymnastiqueRythmique />}
            />
            <Route path="/handball" element={<Handball />} />
            <Route path="/judojujitsu" element={<JudoJuJitsu />} />
            <Route path="/karate" element={<Karate />} />
            <Route path="/kungfu" element={<KungFu />} />
            <Route path="/marchenordique" element={<MarcheNordique />} />
            <Route path="/natation" element={<Natation />} />
            <Route path="/parkour" element={<Parkour />} />
            <Route path="/rugby" element={<Rugby />} />
            <Route path="/squash" element={<Squash />} />
            <Route path="/taekwondo" element={<TaeKwonDo />} />
            <Route path="/tennis" element={<Tennis />} />
            <Route path="/tennisdetable" element={<TennisDeTable />} />
            <Route path="/volleyball" element={<VolleyBall />} />
            <Route path="/yoga" element={<Yoga />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
