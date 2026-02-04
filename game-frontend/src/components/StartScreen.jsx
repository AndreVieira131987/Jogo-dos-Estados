import React from 'react';

function StartScreen({ onStart }) {
    return (
        <div className="screen start-screen">
            <div className="content-card">
                <h1 className="game-title">
                    🇧🇷 Jogo dos Estados e Capitais
                </h1>
                <p className="game-subtitle">
                    Teste seus conhecimentos sobre o Brasil!
                </p>
                <div className="instructions">
                    <h3>Como Jogar:</h3>
                    <ul>
                        <li>Você verá o nome de um estado brasileiro</li>
                        <li>Digite a capital correta do estado</li>
                        <li>Após cada resposta, escolha continuar ou parar</li>
                        <li>Veja sua pontuação final no fim!</li>
                    </ul>
                </div>
                <button className="btn btn-primary btn-large" onClick={onStart}>
                    Começar Jogo
                </button>
            </div>
        </div>
    );
}

export default StartScreen;
