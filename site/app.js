    let song1 = new Audio("./outro songs/New_Title.ogg")
    let song2 = new Audio("./outro songs/eggnog.ogg")
    let song3 = new Audio("./outro songs/frozen.ogg")
    let song4 = new Audio("./outro songs/final.ogg")





   
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

let donny = document.getElementById("donny");

let donnytext = document.getElementById("donnytext")
let changedonny = true
let canon = document.getElementById("canon");

let canontext = document.getElementById("canontext")
let changecanon = true




donny.addEventListener("click", function() {
    if(changedonny == true){
    donnytext.style.animation = "slide 2s"
    donnytext.style.animationFillMode = "forwards"
    changedonny = false
    song1.play()
    }
    else if(changedonny == "yes"){
        donnytext.style.animation = "slide 2s"
        donnytext.style.animationFillMode = "forwards"
        changedonny = false
    }
    else {
        donnytext.style.animation = "slide-back 2s"
        changedonny = "yes"
    }
  
})

canon.addEventListener("click", function() {
    if(changecanon == true){
    canontext.style.animation = "slide 2s"
    canontext.style.animationFillMode = "forwards"
    changecanon = false
   
    }
    else {
        canontext.style.animation = "slide-back 2s"
        changecanon = true
    }
})
  
    


let redditdonny = document.getElementById("redditdonny");
let twitterdonny = document.getElementById("twitterdonny");

let redditcanon = document.getElementById("redditcanon");
let twittercanon = document.getElementById("twittercanon");




redditdonny.addEventListener("click", function() {
window.location.href = "https://www.reddit.com/user/Powerful-Chapter629"
})


redditcanon.addEventListener("click", function() {
    window.location.href = "https://www.reddit.com/user/stonesdev"
    })

twitterdonny.addEventListener("click", function() {
    window.location.href = "https://twitter.com/Donny60600128"
    })

    twittercanon.addEventListener("click", function() {
        window.location.href = "https://twitter.com/NoonCanoon"
        })