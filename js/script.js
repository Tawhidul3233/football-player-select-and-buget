const playersName = [];

function displayName(eachPlayer){
     const allPlayers = document.getElementById('allPlayers')
     allPlayers.innerHTML = '';
     
     for(let i = 0; i < eachPlayer.length; i++){
          const name = eachPlayer[i];
          const tr = document.createElement('tr')
          tr.innerHTML = `
          <td>${i+1 } .</td>
          <td>${ name}</td>
          ` 
          allPlayers.appendChild(tr) 
     }   
}


function getName(element){
     
     playerName = element.parentNode.children[0].innerText;
     if(playersName.length !== 5){
          playersName.push(playerName)
     }
     else{
          alert('max number 5');
          return
     }
     displayName(playersName);
     element.disabled = true;
}



// math calculation

// Common function for collect input field value
function getCost(costValue){
     const getField = document.getElementById(costValue)
     const getFieldValueString = getField.value;

     const getFieldValue = parseFloat(getFieldValueString);
     getField.value = '';
     return getFieldValue;
}

// common function for set result innerText
function setName(setId, getName){
     const playerName = document.getElementById(setId);
     playerName.innerText = getName;
}


document.getElementById('CalPlayCost').addEventListener('click',function(){
     const perPlayerCost = getCost('playerCost');

     const totalPlayerCost = perPlayerCost * playersName.length;
     setName('totalPlayCost', totalPlayerCost)
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

