const arrows = document.querySelectorAll(".arrow");
const imgCount = document
    .querySelectorAll(".movie-list")[0]
    .querySelector(".movies")
    .querySelectorAll(".movie").length;
console.log(imgCount)

arrows.forEach((arrow) =>{
    let count=0;
    arrow.addEventListener("click",function (){
        count++;
        console.log(count)
        let ulElement = arrow.parentNode.querySelector(".movies");
        if (imgCount===(3+count)){
            ulElement.style="transform: translateX(0px)"
            count=0;
            return;
        }
        ulElement.style=`transform: translateX( ${-150 * (count+1)}px)`
        console.log()
    })
})

// dark mode
const toggleBall = document.querySelector(".toggle-ball");
const darkModeElements = document.querySelectorAll(
    ".movie-list-title," +
    ".category-filter-select," +
    ".category-filter-text," +
    ".toggle-ball,.toggle," +
    ".nav-context," +
    ".aside-context," +
    ".container")

toggleBall.addEventListener("click",function (){
    darkModeElements.forEach((element)=>{
        element.classList.toggle("active");
    })
})
