window.onload = function() {
    let song1 = new Audio("./outro songs/cocoa.ogg")
    let song2 = new Audio("./outro songs/eggnog.ogg")
    let song3 = new Audio("./outro songs/frozen.ogg")
    let song4 = new Audio("./outro songs/final.ogg")





    song1.play();
    song1.volume = 0.2
    song2.volume = 0.2
    song3.volume = 0.2
    song4.volume = 0.2
    


    song1.addEventListener("ended", function() {
        song2.play()
    })


    song2.addEventListener("ended", function() {
        song3.play()
    })


    song3.addEventListener("ended", function() {
        song4.play()
    })

    song4.addEventListener("ended", function() {
        song1.play()
    })
}


let donny = document.getElementById("donny");

let donnytext = document.getElementById("donnytext")
let changedonny = true


donny.addEventListener("click", function() {
    
    donnytext.style.opacity = "1"

})



let redditdonny = document.getElementById("reddit");
let twitterdonny = document.getElementById("twitter");



redditdonny.addEventListener("click", function() {
window.location.href = "https://www.reddit.com/user/Powerful-Chapter629"
})

twitterdonny.addEventListener("click", function() {
    window.location.href = "https://twitter.com/Donny60600128"
    })