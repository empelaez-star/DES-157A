(function(){
    'use strict';
    console.log('reading js');

    
    const blue = document.querySelector('#blue');
    const green = document.querySelector('#green');
    
    const messages = document.querySelector('#messages');
    const startBtn = document.querySelector('#startgame');
    const attackBtn = document.querySelector('#attack');

    let attacker;
    let defender;
    let defenderIndex;

    const gameData = {
        fighters: ['Blue', 'Green'],
        health: [100, 100],
        attack: [5, 15, 25, 30, 40],
        attackMessage: [
            ' You held back a lot! 5 hit points!',
            ' A good try! 15 hit points!',
            ' You warmed up! 25 hit points!',
            ' A straight shot! 30 hit points!',
            ' You gave it your all! 40 hit points!'
        ],
        defendMessage: [
            ' let their guard down, hit!',
            ' prepared a little — partial hit!',
            ' saw it coming — no damage!'
        ],
        index: 0
    };


    
    startBtn.addEventListener('click', function(){

    
    document.querySelector('#start').style.display = 'none';
    startBtn.style.display = 'none';


    gameData.index = Math.round(Math.random());
    
    messages.innerHTML =
      `<p>Get ready! <strong>${gameData.fighters[gameData.index]}</strong> goes first.</p>`;
    
    attackBtn.classList.remove('hidden');
    attackBtn.classList.add('showing');
});



    attackBtn.addEventListener('click', blobAttack);


    function blobAttack(){

        
        if(gameData.index === 1){
            attacker = 'Green';
            defender = 'Blue';
            defenderIndex = 0; 
        } else {
            attacker = 'Blue';
            defender = 'Green';
            defenderIndex = 1; 
        }

        const thisAttack = Math.floor(Math.random() * 5);
        const thisDefense = Math.floor(Math.random() * 3);

       
        attackBtn.classList.remove('showing');
        attackBtn.classList.add('hidden');

        
        document.querySelector(`#${attacker.toLowerCase()}`).className = `attack${thisAttack}`;
        messages.innerHTML = `<p><strong>${attacker}</strong>${gameData.attackMessage[thisAttack]}</p>`;

        setTimeout(function(){

            messages.innerHTML =
              `<p><strong>${defender}</strong> has ${gameData.defendMessage[thisDefense]}</p>`;

            document.querySelector(`#${defender.toLowerCase()}`).className = `defend${thisDefense}`;

            
            if(thisDefense === 0){
                gameData.health[defenderIndex] -= gameData.attack[thisAttack];
            } else if(thisDefense === 1){
                gameData.health[defenderIndex] -= gameData.attack[thisAttack] / 2;
            }

            let health = Math.max(0, Math.floor(gameData.health[defenderIndex]));

          
            const barNum = defenderIndex + 1;
            document.querySelector(`#healthbar${barNum} div`).style.width = `${health}%`;
            document.querySelector(`#blob${barNum}`).textContent = `${health}%`;

            checkWin(defenderIndex, attacker);

        }, 2500);
    }



    function checkWin(defenderIndex, attacker){
        setTimeout(function(){

            blue.removeAttribute('class');
            green.removeAttribute('class');

            const health = Math.floor(gameData.health[defenderIndex]);

            if(health <= 0){
                messages.innerHTML =
                  `<p><strong>${attacker}</strong> wins this battle!</p>
                   <button id="reset">Play Again</button>`;

                document.querySelector('#reset').addEventListener('click', () => location.reload());
            } else {
                
                gameData.index = gameData.index === 1 ? 0 : 1;

                messages.innerHTML =
                  `<p>It's now <strong>${gameData.fighters[gameData.index]}'s</strong> turn! Good Luck!</p>`;

                attackBtn.classList.remove('hidden');
                attackBtn.classList.add('showing');
            }

        }, 3000);
    }

})();
