var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto","Amy Android","Robo Trumble"];
console.log(enemyNames)
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
//   window.alert("Welcome to Robot Gladiators!");
    while(enemyHealth > 0){
    {var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    if (promptFight == 'fight' || promptFight == "FIGHT") {
        enemyHealth -= playerAttack;
        if (enemyHealth < 1){
            window.alert(enemyName + " has died!")
        }
        else {
            window.alert(enemyName + " has " + enemyHealth + " health remaining")
        }
        playerHealth -= enemyAttack;
        if (playerHealth < 1){
            window.alert(playerName + " has died!")
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
            }
            else {fight()}
        } else {window.alert("You need to pick a valid option. Try again!")}
}}};

for (x in enemyNames){
    enemyHealth = 50
    fight(enemyNames[x]);
}



