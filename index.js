
let grantHealth = 10;
let userHealth = 40;
let grantDeath = 0;
let userWins = 0;

//assign a to a function
/**
 * Get random number between two numbers including the min and max.
 * 
 * @param   min lowest number
 * @param   max highest number
 * @return  Random number between and including parameters
 * 
 */
function randomNum(min, max){
    return Math.floor(Math.random() * max + min);
}

//prompt user to play and get their character's name
userResponse = prompt ("Would you like to play a game with Grant the Almighty Chirpus?");
if (userResponse === "yes") {
    userName = prompt ("What is your character's name?");
} else {
    alert ("Maybe next time");
}

//starting health stated to user
alert (`${userName}'s health is ${userHealth}. Grant's health is ${grantHealth}. Let the game begin.`);

//turns of game start
while ( userHealth > 0 && grantDeath < 3) {

    //minus one or two from health of both opponents
    grantHealth -= randomNum(1,2);
    userHealth -= randomNum(1,2);

    // log out damage and health
    console.log(`${userName}'s health is ${userHealth}. Grant's health is ${grantHealth}.`);

    if (grantHealth <= 0) {
        grantDeath++;
        userWins++;
        grantHealth = 10;
    }
}

// determine wins
if (grantDeath === 3) {
    console.log (`Game over. You won in ${userWins} turns!`)
    alert (`Game over. You won in ${userWins} turns with ${userHealth} health points left!`)
} else {
    console.log(`Game Over. You lose!`);
    alert (`Game Over. You lose!`);
}