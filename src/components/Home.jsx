import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2412-ftb-mt-web-pt/players"
        );
        const { data } = await response.json();
        setPlayers(data.players);
        console.log(response)
      } catch (err) {
        console.log(err);
      }
    }
    getPlayers();
  }, []);

  if (players.length === 0) {
    return <div>empty data set line 28</div>;
  }

  return (
    <main>
      {players.map((player) => {
        return (
          <div
            className="playerCards"
            onClick={() => {
              navigate(`/player/${player.id}`);
            }}
          >
            Name: {player.name}
          </div>
        );
      })}
    </main>
  );
}

export default Home;
