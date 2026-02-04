import { useState } from 'react';
import './App.css';
import { getStatesList } from './data/states';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

function App() {
    const [gameState, setGameState] = useState('start'); // 'start', 'quiz', 'results'
    const [statesList, setStatesList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    const startGame = () => {
        setStatesList(getStatesList());
        setCurrentIndex(0);
        setScore(0);
        setTotalQuestions(0);
        setGameState('quiz');
    };

    const handleAnswer = (userAnswer, shouldContinue) => {
        const [state, capital] = statesList[currentIndex];
        const isCorrect = userAnswer.trim().toLowerCase() === capital.toLowerCase();

        if (isCorrect) {
            setScore(score + 1);
        }

        setTotalQuestions(totalQuestions + 1);

        if (!shouldContinue || currentIndex >= statesList.length - 1) {
            setGameState('results');
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const restartGame = () => {
        setGameState('start');
    };

    return (
        <div className="app">
            <div className="background-animation"></div>

            {gameState === 'start' && <StartScreen onStart={startGame} />}

            {gameState === 'quiz' && statesList.length > 0 && (
                <QuizScreen
                    state={statesList[currentIndex][0]}
                    capital={statesList[currentIndex][1]}
                    onAnswer={handleAnswer}
                    score={score}
                    totalQuestions={totalQuestions + 1}
                />
            )}

            {gameState === 'results' && (
                <ResultsScreen
                    score={score}
                    totalQuestions={totalQuestions}
                    onRestart={restartGame}
                />
            )}
        </div>
    );
}

export default App;
