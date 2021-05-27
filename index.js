document.addEventListener("DOMContentLoaded", () => {
    let Quotes = [
        "You are loved and appreciated!",
        "You are the best!",
        "I appreciate you!",
        "You got milf potential!",
        "You are one of a kind!",
        "Have a wonderful day!",
        "Nobody could replace you!",
        "Tavernetti loves you!",
        "You are more fun than anyone or anything I know, including bubble wrap",
        "You light up any room you are in",
        "I appreciate our friendship",
        "Nothing can stop you",
        "You are an excellent friend"
    ]



    if(confirm("Are You Julie")){
        console.log("Hello Julie")
        document.getElementById("content").innerText = "Hello Julie"
        setInterval(() => {
            document.getElementById("content").classList.toggle("active")
            document.getElementById("content").classList.toggle("faded")
            document.getElementById("content").innerText = Quotes[Math.floor(Math.random() * Quotes.length)]
        }, 10000)
    } else {
        document.getElementById("content").innerText = "Fuck off then"
    }
})