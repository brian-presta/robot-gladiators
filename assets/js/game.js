var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto","Amy Android","Robo Trumble"];
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    while(enemyHealth > 0){
    if (promptFight == 'fight' || promptFight == "FIGHT") {
        enemyHealth -= playerAttack;
        if (enemyHealth < 1){
            window.alert(enemyName + " has died!")
            break;
        }
        else {
            window.alert(enemyName + " has " + enemyHealth + " health remaining")
        }
        playerHealth -= enemyAttack;
        if (playerHealth < 1){
            window.alert(playerName + " has died!")
            break;
        }
        else {
            window.alert(playerName + " has " + playerHealth + " health remaining")
        }
        console.log(playerName+"'s health is "+playerHealth)
        }
        else if (promptFight == "skip" || promptFight == "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")
            if (confirmSkip ){
            window.alert(playerName + " has chosen to skip the fight!")
            playerMoney -= 2
            console.log("The player has " + playerMoney + " dollars.")
            break;
            }
            else {fight()}
        } else {
            window.alert("You need to pick a valid option. Try again!")
            break;}
}};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("You win! Your score was "+playerMoney);
    }
    else{
        window.alert("You have lost! Your score was "+playerMoney)+".";
    }
    var playAgain = window.confirm("Would you like to play again?");
    if (playAgain){
        startGame()
    }
        else {
            window.alert("Thanks for playing!")
        }
    };
var startGame = function() {
    playerHealth = 100
    playerAttack = 10
    playerMoney = 10
    for (x in enemyNames){
        window.alert("Welcome to Robot Gladiators! Round " + (Number(x) +1));
        enemyHealth = 50
        fight(enemyNames[x])
    } 
    endGame()
};

startGame();


