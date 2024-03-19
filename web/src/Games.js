import React from 'react';
import './App.css'

// Games component
function Games(){
  // Sample data for games
const gamesData = [
  {
    name: 'Chess',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg',
    gameLink: 'https://chess-1.onrender.com'
  },
  {
    name: 'Minesweeper',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Minesweeper_9x9_10_example_16.png',
    gameLink: 'https://minesweeper-rhgf.onrender.com'
  },
];
  return (
    <div className="games-section">
      <div className="games-grid">
        {gamesData.map((game, index) => (
          <div key={index} className="game-item">
            <a href={game.gameLink} target="_blank" rel="noopener noreferrer">
              <img src={game.imageUrl} alt={game.name} />
            </a>
            <p>{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add CSS for the grid layout
// .games-section {
//   padding: 20px;
// }
// .games-grid {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
// }
// .game-item {
//   text-align: center;
// }
// .game-item img {
//   width: 100%;
//   height: auto;
// }

export default Games;
