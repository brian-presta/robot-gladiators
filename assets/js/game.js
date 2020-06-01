var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  enemyHealth -= playerAttack;
  console.log("Roborto's health is "+ enemyHealth);
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
};

fight();