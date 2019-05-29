//Declaring baseline variables for tracking values that change as gameplay occurs

var wins = 0; //wins refers to rounds of combat won, really just for applying updated portraits and checking if it is last round of combat
var attack = 0; //player attack, only reset on game over by total win or defeat, assigned to base value at character selection
var playerHp = 1; //will be assigned upon character selection... maybe doesn't need to be global but here it is anyway :)
var enemyHp = 1; //will be assigned to enemy in battle area based on enemy selected once combat rounds begin

function baseLineStats() { //DRYing it up
    wins = 0;
    attack = 0;
    playerHp = 1;
    enemyHp = 1;

    //move all character elements to top row again

    //change text back to prompt to select player

    //go to title screen

}

//Title screen covers page on loadup with prompt to click to start --in html/css on loadup---------
//on click of title screen ...
$("#titleScreen").on("click", function() {
    //titlescreen hides itself from display

});

//gameplay screen first shows all characters along top with prompt to select char ---------------- all in html on loadup

//on hover effect using jQuery to make portaits pop while user selects

//upon choosing char text changes to say "You are:" and all other portaits move down to enemies row and charselection sound plays

//color scheme is applied upon that choice and text prompt to select opponent appears under 2nd row

//upon clicking enemy char their portrait becomes highlighted and player can press a button to begin the battle

//once battle begins the enemy char icon is removed from row 2 and prompt text to choose opponent is replaced with "Fight!:" (or something)

//player combat image1 and enemy char combat image 1 are populated in battle area of screen at bottom

//attack button appears between images, if pressed display lines of text for damage being done and received

//damage being done is tracked by updating textcontents on each players' images. Also update player hp on main portrait at top as well.

//as player damage scales up their image updates... maybe this occurs after set # of opponents???


//if player hp reaches 0 game over, , 
function gameOver() {
    //play losing sound for character (or generic loss sound??)

    //show game over screen

    //reset everything and then title screen
    baseLineStats();
}


//if enemy char hp reaches 0, player wins, both icons are removed from combat area and combatvictory sound plays
//upon combatvictory the "fight" text is set back to prompt to select opponent
//combat steps proceed again as before, but player hp and attack value carry over

//upon final enemy being defeated 
if (wins === 5) {
    //finalvictory sound players for that character 

    //and a win screen appears

    //stats are set back to baseline and then title screen
    baseLineStats();
}

//reset to title
