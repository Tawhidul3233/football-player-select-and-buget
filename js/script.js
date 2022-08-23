


function getName(name){
     const player = document.getElementById(name);
     const playerName = player.innerText;


     var players = [];
     console.log(players);
     for(let i = 0; i > name.length; i++){
          if(players.includes(playerName)== false){
               players.push(playerName);  
          }
     }
     
     return playerName;
 
}

function setName(setId, getName){
     const playerName = document.getElementById(setId);
     playerName.innerText = getName;
}




document.getElementById("naymerjr").addEventListener('click', function(){
     const name = getName('naymer');
     setName('setNaymer', name);
})

document.getElementById('messi').addEventListener('click', function(){
     const name = getName('leo-messi')
     setName('setMessi', name)
})







// math calculation

function getCost(costValue){
     const getField = document.getElementById(costValue)
     const getFieldValueString = getField.value;

     const getFieldValue = parseFloat(getFieldValueString);
     getField.value = '';
     return getFieldValue;
}

document.getElementById('CalPlayCost').addEventListener('click',function(){
     const perPlayerCost = getCost('playerCost');

     const totalPlayerCost = perPlayerCost * 5;
     setName('totalPlayCost', totalPlayerCost)
     return totalPlayerCost ;

})

document.getElementById('totalCost').addEventListener('click',function(){
     const manager = getCost('managerCost');
     const coach = getCost('coachCost');
     
     const playersCostSum = totalPlayCost;
     const totalPlaysCostString = playersCostSum.innerText;
     const totalPlaysCost = parseFloat(totalPlaysCostString);

     const TotalCost = manager + coach + totalPlaysCost;
     setName('setTotalCost', TotalCost)
})