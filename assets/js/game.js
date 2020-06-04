var fightOrSkip = function() {
    promptFight = ''
    while (!promptFight){
        promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?").toLowerCase()
    }
    if (promptFight === "fight"){
        return true;
    }
    else if (promptFight === "skip"){
        return false;
    }
    else {
        window.alert("You need to pick a valid option. Try again!")
        return fightOrSkip();
    }
};

var fight = function(enemyInfo) {
    var promptFight = fightOrSkip()
    console.log(promptFight)
    while(enemyInfo.health > 0){
        if (promptFight) {
            // player attack
            var damage = randomNumber(playerInfo.attack-3,playerInfo.attack)
            enemyInfo.health = Math.max(0,enemyInfo.health-damage)
            console.log("Damage was "+damage)
            if (enemyInfo.health < 1){
                window.alert(enemyInfo.name + " has died!")
                break;
            }
            else {
                window.alert(enemyInfo.name + " has " + enemyInfo.health + " health remaining")
            }
            // Enemy attack
            var damage = randomNumber(enemyInfo.attack-3,enemyInfo.attack)
            console.log("enemy damage is "+damage)
            playerInfo.health = Math.max(0,playerInfo.health - damage)
            console.log("After attack, health is "+playerInfo.health)
            if (playerInfo.health < 1){
                window.alert(playerInfo.name + " has died!")
                break;
            }
            else {
                window.alert(playerInfo.name + " has " + playerInfo.health + " health remaining")
            }
            console.log(playerInfo.name+"'s health is "+playerInfo.health)
            }
        else{
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")
            if (confirmSkip ){
            window.alert(playerInfo.name + " has chosen to skip the fight!")
            playerInfo.money -= 2
            console.log("The player has " + playerInfo.money + " dollars.")
            break;
            }
            else {fight()}
        } 
    }
};
var randomNumber = function(min,max){
    var value = Math.floor(Math.random()*(max-min+1) + min) ;

    return value
}
var endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("You win! Your score was "+playerInfo.money);
    }
    else{
        window.alert("You have lost! Your score was "+playerInfo.money)+".";
    }
    var playAgain = window.confirm("Would you like to play again?");
    if (playAgain){
        startGame()
    }
        else {
            window.alert("Thanks for playing!")
        }
    };
var shop = function() {
    var shopChoice = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?").toLowerCase();
    switch(shopChoice){
        case "1":
        case "refill":
            playerInfo.refillHealth()
            window.alert("Your health is now "+playerInfo.health+". Your money is now "+playerInfo.money+".")
            break;
        case "2":    
        case "upgrade":
            playerInfo.upgradeAttack()
            window.alert("Your attack is now " + playerInfo.attack + ".")
            break;
        case "3":
        case "":    
        case "leave":
            window.alert("Leaving the store.")
            break;
        default:
            window.alert("You did not pick a valid option")
            shop()
            break;
        
    }

};
// player info
var getPlayerName = function() {
    var name = ""
    while (!name) {
        name = window.prompt("What is your robot's name?");
    }
    return name;
}
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
      },
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
    upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
};


console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
// enemy info
var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    }
  ];

var startGame = function() {
    playerInfo.reset()
    for (x in enemyInfo){
        window.alert("Welcome to Robot Gladiators! Round " + (Number(x) +1));
        enemyInfo[x].health = randomNumber(40,60);
        fight(enemyInfo[x])
        if (playerInfo.health < 1){break}
        if ( x < enemyInfo.length -1){
            var storeConfirm = window.confirm("The fight is over, visit the shop?")
            if (storeConfirm){
            shop();
            }
        }
    } 
    endGame()
};

startGame();


