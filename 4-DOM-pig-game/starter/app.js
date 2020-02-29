/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/






init();

let dice = Math.floor(Math.random() * 6) + 1
console.log(dice)


document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Random number
    let dice = Math.floor(Math.random() * 6) + 1

    //2. Display the result
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'


    //3.Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice
        // roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore
    } else {
        //next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0
        // round score back to 0 because when we change to activePlayer1 we schould start from 0 not from the points the activePlayer0 has! 
        // if(activePlayer === 0){
        //     activePlayer = 1
        // }else {
        //     activePlayer = 0
        // }

        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        document.querySelector('.dice').style.display = 'none'

    }

    document.querySelector('btn-new').addEventListener('click', init)

    function init() {
        scores = [0, 0]
        activePlayer = 0;
        roundScore = 0;

        document.querySelector('.dice').style.display = 'none'
        document.getElementById('score-0').textContent = '0'
        document.getElementById('score-1').textContent = '0'
        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-0').textContent = '0'
    }
})




// 
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// const x = document.querySelector('#score-0').textContent
// console.log(x)ude