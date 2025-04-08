
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function AllPlayers() {
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

  return (<ul className='puppies-container'>
    {
      players.length ? 
        players.map(puppy => {
          return <li key={puppy.id}>
            <h3>{puppy.name}</h3>
            <h3>#{puppy.id}</h3>
            <img src={puppy.imageUrl} />
            <button onClick={() => navigate(`/details/${puppy.id}`)}>Show Details</button>
            <button className='deleteBtn' onClick={() => removePuppy(puppy.id)}>X</button>
          </li>
        })
        :
        <h2>Loading ...</h2>
    }

  </ul>
    // <main>
    //   {players.map((player) => {
    //     return (
    //       <div
    //         className="playerCards"
    //         onClick={() => {
    //           navigate(`/player/${player.id}`);
    //         }}
    //       >
    //         Name: {player.name}
    //       </div>
    //     );
    //   })}
    // </main>
  );
}

export default AllPlayers;