import React from 'react';

function ResultsScreen({ score, totalQuestions, onRestart }) {
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    const getPerformanceMessage = () => {
        if (percentage >= 90) return { emoji: '🏆', text: 'Excelente!', color: '#FFD700' };
        if (percentage >= 70) return { emoji: '🎉', text: 'Muito Bom!', color: '#4CAF50' };
        if (percentage >= 50) return { emoji: '👍', text: 'Bom trabalho!', color: '#2196F3' };
        return { emoji: '📚', text: 'Continue praticando!', color: '#FF9800' };
    };

    const performance = getPerformanceMessage();

    return (
        <div className="screen results-screen">
            <div className="content-card results-card">
                <div className="performance-badge" style={{ color: performance.color }}>
                    <span className="performance-emoji">{performance.emoji}</span>
                    <h2 className="performance-text">{performance.text}</h2>
                </div>

                <div className="results-summary">
                    <h3>Resultado Final</h3>
                    <div className="result-row">
                        <span className="result-label">Acertos:</span>
                        <span className="result-value">{score} de {totalQuestions}</span>
                    </div>
                    <div className="result-row">
                        <span className="result-label">Porcentagem:</span>
                        <span className="result-value percentage">{percentage}%</span>
                    </div>
                </div>

                <button className="btn btn-primary btn-large" onClick={onRestart}>
                    🔄 Jogar Novamente
                </button>
            </div>
        </div>
    );
}

export default ResultsScreen;
