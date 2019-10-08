document.addEventListener("DOMContentLoaded", function preload(){
    const body = document.body
    
    const h3 = document.createElement("h3")
    const img = document.createElement("img")
    const p = document.createElement("p")

    h3.innerText = "Damon"

    body.appendChild(h3)

    img.src = "https://ichef.bbci.co.uk/news/320/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg"
    p.innerText = "My name is Damon and I kinda can teach."
    img.className = "hide-stuff"
    p.className = "hide-stuff"
    body.append(img, p)
    
    h3.addEventListener("click", function hideOrShowInfo(){
        const hiddenStuff = document.getElementsByClassName("hide-stuff")
        const shownStuff = document.getElementsByClassName("styled")
        if (hiddenStuff.length > 0){
            Array.from(hiddenStuff).map(element =>
                element.className = "styled")
        }
        else {
            Array.from(shownStuff).map(element =>
                element.className = "hide-stuff")
                }
            })
      
    // h3.addEventListener("mouseover", showInfo)
            
    // h3.addEventListener("click", function hideinfo(){
    //     img.style.display = "none"
    //     p.style.display = "none"
    // })
    // h3.addEventListener("mouseover", function showinfo(){
    //     img.style.display = "block"
    //     p.style.display = "block"
    // })

    
    // function showInfo(){
    // }

})
