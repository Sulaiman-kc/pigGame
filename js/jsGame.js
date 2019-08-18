var scores, roundScores, activePlayer, gamePlaying = true;

initial();


document.querySelector('#btn-roll').addEventListener('click', function(){

    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-'+ dice +'.png';


        if(dice !== 1){
            roundScores += dice;
            // console.log(roundScores);
            document.querySelector('#current'+activePlayer).textContent = roundScores;
        } else{
        nextPlayer();
        }
    }

    
});

document.querySelector('#btn-hold').addEventListener('click', function(){

    if(gamePlaying){
        scores[activePlayer-1] += roundScores;
        document.querySelector('#score' + activePlayer).textContent = scores[activePlayer-1];
        if(scores[activePlayer-1] >= 100){
            document.querySelector('#player'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('#player' + activePlayer).classList.add('winner');
            document.querySelector('#player' + activePlayer).classList.remove('active');
            gamePlaying = false;
        } else{
            nextPlayer();
        }
    }



   

});

document.querySelector('#btn-new').addEventListener('click', initial);

function initial(){
    scores = [0,0];
    roundScores = 0;
    activePlayer = 1;
    // dice = Math.floor(Math.random() * 6) + 1;
    // document.querySelector('#current'+activePlayer).textContent = dice;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('current1').textContent = '0';
    document.getElementById('current2').textContent = '0';
    document.querySelector('#player1').textContent = 'PLAYER1';
    document.querySelector('#player2').textContent = 'PLAYER2';
    document.querySelector('#player1').classList.remove('winner');
    document.querySelector('#player2').classList.remove('winner');
    document.querySelector('.player1').classList.remove('active');
    document.querySelector('.player2').classList.remove('active');
    document.querySelector('.player1').classList.add('active');

}




function nextPlayer(){
    activePlayer === 1 ? activePlayer = 2: activePlayer = 1;
    roundScores = 0;

    document.getElementById('current1').textContent = '0';
    document.getElementById('current2').textContent = '0';

    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';
}