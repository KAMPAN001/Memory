//Main variable for program
var cards_prepare = ["card1.png", "card1.png", "card2.png", "card2.png", "card3.png", "card3.png", "card4.png", "card4.png", "card5.png", "card5.png", "card6.png", "card6.png", "card7.png", "card7.png", "card8.png", "card8.png", "card9.png", "card9.png", "card10.png", "card10.png"];
var random_numbers = [];
var cards_ready = [];
var oneVisible = false;
var turnCounter = 0;
var visibleNumber = 0;
var lock = false;
var pairsLeft = 10;

prepar_card();
//Creating variables for cards and using the function that waits for clicking on a card
var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');

var c16 = document.getElementById('c16');
var c17 = document.getElementById('c17');
var c18 = document.getElementById('c18');
var c19 = document.getElementById('c19');

c0.addEventListener("click", function () { revealCard(0); });
c1.addEventListener("click", function () { revealCard(1); });
c2.addEventListener("click", function () { revealCard(2); });
c3.addEventListener("click", function () { revealCard(3); });

c4.addEventListener("click", function () { revealCard(4); });
c5.addEventListener("click", function () { revealCard(5); });
c6.addEventListener("click", function () { revealCard(6); });
c7.addEventListener("click", function () { revealCard(7); });

c8.addEventListener("click", function () { revealCard(8); });
c9.addEventListener("click", function () { revealCard(9); });
c10.addEventListener("click", function () { revealCard(10); });
c11.addEventListener("click", function () { revealCard(11); });

c12.addEventListener("click", function () { revealCard(12); });
c13.addEventListener("click", function () { revealCard(13); });
c14.addEventListener("click", function () { revealCard(14); });
c15.addEventListener("click", function () { revealCard(15); });

c16.addEventListener("click", function () { revealCard(16); });
c17.addEventListener("click", function () { revealCard(17); });
c18.addEventListener("click", function () { revealCard(18); });
c19.addEventListener("click", function () { revealCard(19); });


//Function used to revel cards
function revealCard(nr) {
    var obraz = "url(png/" + cards_ready[nr] + ")";
    var opacityValue = $('#c' + nr).css('opacity');

    if (opacityValue != 0 && lock == false) {

        lock = true;
        $('#c' + nr).css('background-image', obraz);
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');


        if (oneVisible == false) {
            oneVisible = true;
            visibleNumber = nr;
            lock = false;

        }
        else {

            if (cards_ready[visibleNumber] == cards_ready[nr]) {
                setTimeout(function () { hide2Cards(nr, visibleNumber) }, 750);

            }
            else {
                setTimeout(function () { restore2Cards(nr, visibleNumber) }, 1100);

            }
            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }



    }

}

//A function used to hide guessed cards and check whether the player has won
function hide2Cards(nr1, nr2) {
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');
    pairsLeft--;
    if (pairsLeft == 0) {
        if (high_score > turnCounter) {
            high_score = turnCounter;
        }

        $('.board').html('<h1>You win!<br/>Done in ' + turnCounter + ' turns</h1>' + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>');

    }
    lock = false;
}

//A function that changes class parameters for cards
function restore2Cards(nr1, nr2) {
    $('#c' + nr1).css('background-image', 'url(png/card.png');
    $('#c' + nr1).addClass('card');
    $('#c' + nr1).removeClass('cardA');

    $('#c' + nr2).css('background-image', 'url(png/card.png');
    $('#c' + nr2).addClass('card');
    $('#c' + nr2).removeClass('cardA');
    lock = false;
}

// Prepare a random deck of cards
function prepar_card() {
    while (random_numbers.length < 20) {
        var random_number = Math.floor(Math.random() * 20);
        if (random_numbers.indexOf(random_number) === -1) {
            random_numbers.push(random_number);
        }
    }

    random_numbers.forEach(function (index) {
        cards_ready.push(cards_prepare[index]);
    });
}