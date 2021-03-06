function shout(string) {
    return string.toUpperCase();
} 
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log('HELLO')
}
function logWhisper(string) {
    console.log('hello')
}
function sayHiToGrandma(string) {
    var cantHear = "I can't hear you!"
    var canHear = "YES INDEED!"
    var lovEqual = "I love you, too."
    if (string.toLowerCase(string) === string) {
        return cantHear
    }
    if (string.toUpperCase(string) === string) {
        return canHear
    }
    if (string === "I love you, Grandma.")
        return lovEqual
}