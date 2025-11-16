// Create a web page that prints all of the lyrics to '99 bottles of beer' 
function printLyrics() {
    const output = document.getElementById("lyrics");
    output.innerHTML = ""; // clear previous content

    for (let i = 99; i >= 0; i--) {
        if (i > 0) {
            output.innerHTML += i + " bottle" + (i > 1 ? "s" : "") + " of beer on the wall, " + i + " bottle" + (i > 1 ? "s" : "") + " of beer.\n";
            output.innerHTML += "Take one down and pass it around, " + (i-1 > 0 ? (i-1) + " bottle" + (i-1 > 1 ? "s" : "") : "no more") + " of beer on the wall.\n\n";
        } 
        else {
            output.innerHTML += "No more bottles of beer on the wall,no more bottles of beer.\n";
            output.innerHTML += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        }
    }
}