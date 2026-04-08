import { useState } from 'react'
import './App.css'

function App() {
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [resultMessage, setResultMessage] = useState('Choose your move to start!')

  const options = ['rock', 'paper', 'scissors']
  const icons = { rock: '🪨', paper: '📄', scissors: '✂️' }

  const playRound = (playerChoice) => {
    const computerChoice = options[Math.floor(Math.random() * 3)]
    
    let result = ''
    if (playerChoice === computerChoice) {
      result = 'draw'
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'win'
    } else {
      result = 'lose'
    }

    // Update Scores
    if (result === 'win') {
      setPlayerScore(prev => prev + 1)
      setResultMessage(`You win! ${icons[playerChoice]} beats ${icons[computerChoice]}`)
    } else if (result === 'lose') {
      setComputerScore(prev => prev + 1)
      setResultMessage(`You lose! ${icons[computerChoice]} beats ${icons[playerChoice]}`)
    } else {
      setResultMessage(`It's a draw! We both chose ${icons[playerChoice]}`)
    }
  }

  const resetGame = () => {
    setPlayerScore(0)
    setComputerScore(0)
    setResultMessage('Choose your move to start!')
  }

  return (
    <div className="game-box">
      <h1>RPS Showdown</h1>
      
      <div className="score-container">
        <div className="score">You: {playerScore}</div>
        <div className="score">CPU: {computerScore}</div>
      </div>

      <div className="result">{resultMessage}</div>

      <div className="choices">
        <button className="choice-btn" onClick={() => playRound('rock')} title="Rock">🪨</button>
        <button className="choice-btn" onClick={() => playRound('paper')} title="Paper">📄</button>
        <button className="choice-btn" onClick={() => playRound('scissors')} title="Scissors">✂️</button>
      </div>

      <button className="reset-btn" onClick={resetGame}>Reset Score</button>
    </div>
  )
}

export default App
