window.addEventListener("DOMContentLoaded", () => {
    let CatVideos = [
        "https://www.youtube.com/embed/ExxWgfLV-20",
        "https://www.youtube.com/embed/hY7m5jjJ9mM",
        "https://www.youtube.com/embed/1fYIiEPKIMI",
        "https://www.youtube.com/embed/UAaK7665YS0"
    ]

    let iframe = document.getElementById("iFrame")
    let btn = document.getElementById("btn")
    
    function getVideo(){
        let i = Math.floor(Math.random() * CatVideos.length)
        iframe.src = CatVideos[i]
    }
    
    getVideo()

    btn.addEventListener("click", () => {
        getVideo()
    })
})

