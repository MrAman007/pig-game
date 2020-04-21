let score, currentScore, activePlayer,currentRound;

init();

// Start Game Button

document.getElementById('start-game-btn').addEventListener('click', function() {
    
    init();
    // hide elements 
    document.getElementById('new-game').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    
    // show elements 
    document.getElementById('dice').style.display = 'flex';
    document.getElementById('dice-roller').style.display = 'flex';
    document.getElementById('dice-hold').style.display = 'flex';
    document.getElementById('round-meter').style.display = 'flex';
    document.getElementById('dice-roll-btn').style.display = 'flex';
    document.getElementById('dice-hold-btn').style.display = 'flex';

    // RESET ELEMENTS
    document.getElementById('round-meter').textContent = 'Round 1';
    document.getElementById('player-1-score').textContent = '0';
    document.getElementById('player-2-score').textContent = '0';
    document.getElementById('player-1-message').textContent = '';
    document.getElementById('player-2-message').textContent = '';

    //set active player
    document.querySelector('.player-1-head').classList.add('active-player');
    // document.querySelector('.player-2-head').classList.add('inactive-player');


});


// ROLLING THE DICE 
document.getElementById('dice-roll-btn').addEventListener('click', function() {

    // getting random dice value 
    let dice = Math.floor(Math.random() * 6 + 1);

    // displaying dice value 
    document.getElementById('dice-img').src = './resources/img/dice-' + dice + '.png';
    
    // current score updater
    if( dice !== 1) {
        //Add score
        currentRoundScore += dice;
        document.getElementById('player-'+activePlayer+'-message').textContent = 'Current Round Score = ' + currentRoundScore;
    } else {
        //Next Player
        nextPlayer();
        
    }
});

// HOLD BUTTON 
document.getElementById('dice-hold-btn').addEventListener('click', function() {
    // ADD CURRENT SCORE TO GLOBAL SCORE 
    let scoreIndex = activePlayer === 1 ? 0 : 1;
    score[scoreIndex] += currentRoundScore;

    // UPDATE THE UI
    document.getElementById('player-'+activePlayer+'-score').textContent = score[scoreIndex];
    
    // CHECK IF PLAYER WON THE GAME
    if (score[scoreIndex] >= 10) {
        document.getElementById('player-'+activePlayer+'-score').textContent = 'WINNER'
        document.getElementById('round-meter').style.display = 'none';
        document.getElementById('dice-roll-btn').style.display = 'none';
        document.getElementById('dice-hold-btn').style.display = 'none';
        document.getElementById('new-game').style.display ='flex';
        document.getElementById('player-')

    } else {
        // NEXT PLAYER

        nextPlayer();
    }

});

// document.getElementById('restart-game-btn').addEventListener('click', restart());

function nextPlayer() {

    currentRoundScore = 0;
    document.getElementById('player-'+activePlayer+'-message').textContent = 'Current Round Score = ' + currentRoundScore;        
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;

    document.querySelector('.player-1-head').classList.toggle('active-player');
    document.querySelector('.player-2-head').classList.toggle('active-player');
    nextRound();
    
}

    
function nextRound() {
    if (activePlayer === 1) {
        currentRound++;
        document.getElementById('round-meter').textContent = 'Round '+ currentRound;
    }
}

// INITIALIZATION FUNCTION
function init() {
    score = [0,0];
    currentRoundScore = 0;
    currentRound = 1;
    activePlayer = 1;

    // Star Game Page 

    document.getElementById('dice').style.display = 'none';
    document.getElementById('dice-roller').style.display = 'none';
    document.getElementById('dice-hold').style.display = 'none';
    document.getElementById('round-meter').style.display = 'none';
    document.querySelector('.player-1-head').classList.remove('active-player');
    document.querySelector('.player-2-head').classList.remove('active-player');

}