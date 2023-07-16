const carousel = document.querySelector(".carousel")
const arrowIcons = document.querySelectorAll(".wrapper i")
const radioIcons = document.querySelectorAll(".radio i")

async function fetchImages() {
    const response = await fetch("./props/data.json")
    const data = await response.json()
    for(let i=0;i<9;i++) {
        const pic = document.createElement('img')
        pic.src = data.urls[i].url
        pic.draggable = false
        carousel.appendChild(pic)
    }
}

fetchImages()

let curr = 1
radioIcons[0].style.color="red"
arrowIcons[0].style.display = "none"

const reflectChange = () => {
    if(curr==1) {
        radioIcons[0].style.color="red"
        radioIcons[1].style.color="white"
        radioIcons[2].style.color="white"
        if(window.innerWidth>=1000) {
            arrowIcons[0].style.display = "none"
            arrowIcons[1].style.display = "block"
        }
        else {
            arrowIcons[0].style.display = "block"
            arrowIcons[1].style.display = "block"
        }
        
    }
    else if(curr==2) {
        radioIcons[0].style.color="white"
        radioIcons[1].style.color="red"
        radioIcons[2].style.color="white"  
        if(window.innerWidth>=1000) {
            arrowIcons[0].style.display = "block"
            arrowIcons[1].style.display = "block"
        }
        else {
            arrowIcons[0].style.display = "block"
            arrowIcons[1].style.display = "block"
        }
    }
    else {
        radioIcons[0].style.color="white"
        radioIcons[1].style.color="white"
        radioIcons[2].style.color="red"
        if(window.innerWidth>=1000) {
            arrowIcons[0].style.display = "block"
            arrowIcons[1].style.display = "none"
        }
        else {
            arrowIcons[0].style.display = "block"
            arrowIcons[1].style.display = "block"
        }
    }
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if(icon.id=="left") {
            if(window.innerWidth>=1000) {
                carousel.scrollLeft+=(-950)
                if(curr>0)
                    curr-=1
            }
            else
                carousel.scrollLeft+=(-317)
            reflectChange()
        }
        else {
            if(window.innerWidth>=1000) {
                if(curr<3)
                    curr+=1
                carousel.scrollLeft+=(950)
            }
            else
                carousel.scrollLeft+=(317)
            reflectChange()
        }
    })
})

radioIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if(icon.id=="i1")
            if(curr!=1) {
                if(curr==2) 
                    carousel.scrollLeft+=(-950)
                else
                    carousel.scrollLeft+=(-1900)
                curr=1
                reflectChange()
            }
        if(icon.id=="i2")
            if(curr!=2) {
                if(curr==1)
                    carousel.scrollLeft+=(950)
                else    
                    carousel.scrollLeft+=(-950)
                curr=2
                reflectChange()
            }
        if(icon.id=="i3")
            if(curr!=3) {
                if(curr==1)
                    carousel.scrollLeft+=(1900)
                else
                    carousel.scrollLeft+=(950)
                curr=3
                reflectChange()
            }
    })
})
