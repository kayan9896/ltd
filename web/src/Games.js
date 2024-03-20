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
  {
    name: 'Sudoku',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png',
    gameLink: 'https://sudoku-jrac.onrender.com'
  },
];
  return (
    <div className="games-section">
      <h1 style={{marginBottom:'4%'}}>Games</h1>
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

export default Games;
