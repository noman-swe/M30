function setPlayerStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '10px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
   /*  player.addEventListener('click', function(){
        player.style.backgroundColor = 'lightgreen';
    }); */
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    //add class to this new div
    player.classList.add('player');
    player.innerHTML = `
            <div class="player">
                <h4 class="player-name">New Player</h4>
                <p>
                I am a new player. I have only completed the tutorial and bought some champions and i understand nothing about the game i played one match and died like 15 times pls all the experienced players help me.
                </p>
            </div>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
}

// 
document.getElementById('players').addEventListener('click', function(event){
    console.log(event.target.tagName.toLowerCase());
    if( (event.target.tagName.toLowerCase()) == 'div' ){
        event.target.style.backgroundColor = 'lightgreen';
    }
    else{
    event.target.parentNode.style.backgroundColor = 'lightgreen';
    }
});