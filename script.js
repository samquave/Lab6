$(document).ready(function() {
    var friendName = ['Deadshot', 'Lex Luthor', 'The Joker', 'Sinestro', 'Reverse Flash'];
    var locationName = ['Gotham City Bank', 'Arkham Asylum', 'LexCorp', 'Wayne Manor', 'The Fortress of Solitude', 'The Hall of Justice', 'S.T.A.R. Labs', 'Atlantis', 'The Hall of Doom', 'The Batcave'];
    var weaponName = ['shoe', 'pencil', 'coffee mug', 'bowling pin', 'rolled up newspaper', 'spray on deodorant', 'lego brick', 'hot sauce', 'cattle prod', 'dental floss', 'mop', 'ice cube tray', 'toenail clippers', 'shoelace', 'sock full of batteries', 'extension cord', 'pizza box', 'lightbulb', 'music box', 'shoelace'];

    
      
           
    for(let i = 1; i <= 100; i++) {
        var randomName = friendName[Math.floor(Math.random()*friendName.length)];
        var randomWeapon = weaponName[Math.floor(Math.random()*weaponName.length)];
        var randomLocation = locationName[Math.floor(Math.random()*locationName.length)];

        var h3 = document.createElement('h3');
        h3.innerHTML = "Accusation " + i;
        // var accuser = createAccuser(i);
        h3.addEventListener('click', function() {
            alert("I accuse " + randomName + " with the " + randomWeapon + " in " + randomLocation + "!");
        
    });
       
    document.body.appendChild(h3);
        console.log(randomName); 
      
    };
   
});
