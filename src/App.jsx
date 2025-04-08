import { Routes, Route, Link } from "react-router";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <>
<h1>Puppy Bowl</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Puppy</Link>
      </nav>



      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/add" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
