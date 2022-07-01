import "./App.scss";
import Header from "./Components/Header/Header";
import CharactersPage from "./Components/CharactersPage/CharactersPage";
import { Route, Routes } from "react-router-dom";
import EpisodesPage from "./Components/EpisodesPage/EpisodesPage";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />}/>
        <Route path="/episodes" element={<EpisodesPage />}/>
      </Routes>
    </div>
  );
}

export default App;
