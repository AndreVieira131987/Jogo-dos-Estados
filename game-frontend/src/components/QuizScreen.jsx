import React, { useState } from 'react';

function QuizScreen({ state, capital, onAnswer, score, totalQuestions }) {
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [showContinue, setShowContinue] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const isCorrect = userAnswer.trim().toLowerCase() === capital.toLowerCase();
        setFeedback({
            correct: isCorrect,
            message: isCorrect
                ? '✅ Resposta Correta!'
                : `❌ Resposta Errada! A capital de ${state} é ${capital}`
        });
        setShowContinue(true);
    };

    const handleContinue = (shouldContinue) => {
        onAnswer(userAnswer, shouldContinue);
        setUserAnswer('');
        setFeedback(null);
        setShowContinue(false);
    };

    return (
        <div className="screen quiz-screen">
            <div className="score-bar">
                <div className="score-item">
                    <span className="score-label">Pontuação:</span>
                    <span className="score-value">{score}</span>
                </div>
                <div className="score-item">
                    <span className="score-label">Pergunta:</span>
                    <span className="score-value">{totalQuestions}</span>
                </div>
            </div>

            <div className="content-card quiz-card">
                <h2 className="question">
                    Qual é a capital de <span className="state-name">{state}</span>?
                </h2>

                {!showContinue ? (
                    <form onSubmit={handleSubmit} className="answer-form">
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Digite a capital..."
                            className="answer-input"
                            autoFocus
                            required
                        />
                        <button type="submit" className="btn btn-primary">
                            Confirmar Resposta
                        </button>
                    </form>
                ) : (
                    <div className="feedback-section">
                        <div className={`feedback ${feedback.correct ? 'correct' : 'incorrect'}`}>
                            {feedback.message}
                        </div>
                        <div className="continue-buttons">
                            <button
                                className="btn btn-success"
                                onClick={() => handleContinue(true)}
                            >
                                ▶️ Continuar
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleContinue(false)}
                            >
                                ⏹️ Parar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuizScreen;
