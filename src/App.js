
import Header from "./Components/Header/Header";
import CharactersPage from "./Components/CharactersPage/CharactersPage";
import { Route, Routes } from "react-router-dom";
import EpisodesPage from "./Components/EpisodesPage/EpisodesPage";
import CardDetails from "./Components/CardDetails/CardDetails";
import EpisodesRow from "./Components/EpisodesRow/EpisodesRow";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />}/>
        <Route path="/episodes" element={<EpisodesPage />}/>
        <Route path=":charId" element={<CardDetails />}/>
        <Route path=":episodeId" element={<EpisodesRow />}/>
      </Routes>
    </div>
  );
}

export default App;
