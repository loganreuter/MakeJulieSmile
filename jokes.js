document.addEventListener("DOMContentLoaded", () => {
    let jokes = [
        {
            joke: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus."
        },
        {
            joke: "Why didn't the photon pack a suitcase?",
            answer: "Because it is travelling light."
        },
        {
            joke: "Did you hear about the mathematician who's afraid of negative numbers?",
            answer: "They'll stop at nothing to avoid them."
        },
        {
            joke: "A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”",
            answer: "“Don’t worry,” said the doc. “Those are just contractions.”"
        },
        {
            joke: "Why don’t scientists trust atoms?",
            answer: "Because they make up everything."
        }
    ]

    let i = 0;
    function newRandom(){
        i = Math.floor(Math.random() * jokes.length)
        document.getElementById("answer").classList.add("hidden")
        document.getElementById("jokes").innerText = jokes[i].joke
        document.getElementById("answer").innerText = "Click to See Answer"
    }

    newRandom()
    
    document.getElementById("answer").addEventListener("click", (e) => {
        e.currentTarget.classList.remove("hidden")
        e.currentTarget.innerText = jokes[i].answer
        setTimeout(() => {
            newRandom();
        }, 3000)
    })

})