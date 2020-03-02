/*
GAME RULES: Pig Game

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// dodalam variables potrzebne na poczatku. 
//Nastepnie utworzylam variable random number zeby widziec w konsoli random number wyrzucane 'jeszcze nie przez kostke' 
// nastepnie wybralam poprzez querySelector pozycje z textConten poniewaz chce zeby zmienial sie hardcoded text na mojej stronie w liczby ktore sa wykreowane przez moja funkcje let = dice 
let gamePlaying
init();

// creating a dice 



// trudne querySelector. Mianowicie id=current jest przypisane do hardcoded '11' and '0' 
// dodajac activePlayer1 or activePlayer0 i uzywajac textContent do ktorego jest przypisane let = dice sprawiamy ze wyrzucane numery sa wyswietlane w player-current-score


//** roznica miedzy textContent a InnerHTML jest taka ze z textCOntent mozemy tylko dodac text a z innerHTML mozemy dodac style do tego tekstu. 
// text.COntent mozemy rowniez uzywac do czytania elementu, sprawdzenia jaka wartosc ma ten element w HTML -> przyklad: var x = document.querySelector('#score-0).textContent; i wynik to hardcoded 43

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// document.querySelector('#current-' + activePlayer).textContent = dice


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
 // co sie dzieje jezeli klikniemy button 
   // potrzebujemy random number
        let dice = Math.floor(Math.random() * 6 + 1)
        console.log(dice)
   // display dice result  from the pictures 
        const diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'
   // update the round score if the rolled number was not 1 
        if(dice !== 1){
        //add score
            roundScore += dice
        // roundScore dodaje do siebie the dice wyniki pozniej juz we wczesniej wybranym querySelector dopisujemy roundScore = sctivePlayer
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        }else {
            nextPlayer()
        }
    }
  
})


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        // add current score to global score
// scores[activePlayer] = scores[activePlayer] + roundScore; 
    scores[activePlayer] += roundScore

    // update the UI - userInterface
        document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer]
    
    // check if the player won the game
        if (scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active')
            gamePlaying = false
        }else {
        //NextPlayer
            nextPlayer()
        }
    }

})

function nextPlayer(){
    //next player, ustawiamy tutaj zmiane playerow, jezeli activePlayer = 0 to activePlayer ma byc 1 i odwrotnie, jesli jest 1 to ma byc 0. NAstepnie poniewaz jestesmy w sekcji else musimy dodac ze przy wyrzuceniu 1 current0 i current-1 jest wyzerowane/ bo takie sa zasady gry 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
   // nastepnie dodajemy classe o nazwie active-panel ktora podswietla i dodaje czerwona kropke na stronie jezeli gra gracz 1 to jest inne i jesli jest gracz 0 to tez jest inna. Uzywamy toggle zeby zmienial sie Player caly czas
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('.dice').style.display = 'none'
   
   }

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    gamePlaying = true
    document.querySelector('.dice').style.display = 'none'
//getElementById is faster then the querySelector
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player1'
    document.getElementById('name-1').textContent = 'Player2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel' ).classList.remove('winner')
    document.querySelector('.player-0-panel' ).classList.remove('active')
    document.querySelector('.player-1-panel' ).classList.remove('active')
    document.querySelector('.player-0-panel' ).classList.add('active')
// callback function is a function called by another thing, for example by document.querySelector. 

}



















