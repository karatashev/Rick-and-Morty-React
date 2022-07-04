
import Header from "./Components/Header/Header";
import CharactersPage from "./Components/CharactersPage/CharactersPage";
import { Route, Routes } from "react-router-dom";
import EpisodesPage from "./Components/EpisodesPage/EpisodesPage";
import CardDetails from "./Components/CardDetails/CardDetails";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />}/>
        <Route path="/episodes" element={<EpisodesPage />}/>
        <Route path=":charId" element={<CardDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
