/**
 * Created by William on 7/7/16.
//  */

    this.array = ["You can do anything, but not everything. - David Allen",
        "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.— Antoine de Saint-Exupéry",
        "The richest man is not he who has the most, but he who needs the least.— Unknown Author",
        "You miss 100 percent of the shots you never take.— Wayne Gretzky",
        "Try not to become a man of success, but rather try to become a man of value.- Albert Einstein",
        "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.— Ambrose Redmoon",
        "You must be the change you wish to see in the world.—Gandhi",
        "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.—Lin-C"];
    this.value = "Try not to become a man of success, but rather try to become a man of value.- Albert Einstein";

//Creates random number

function randomNum(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
    }

//Get index from array.
function arrayList(index) {
    return this.array[index];
}

//Change text in box.
function changeText() {
    var random = this.randomNum(this.array.length);
    this.value = this.arrayList(random);
    document.getElementById('quote').innerHTML=value;
}


function openTweet() {
    document.getElementById('tweet').setAttribute("href","https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+value);
}
