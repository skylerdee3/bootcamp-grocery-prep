const ingredients = document.getElementsByClassName('ingredient')

document.addEventListener('click', event => {
    if (event.target.id === 'sub') updateCount(-1)
    if (event.target.id === 'add') updateCount(1)
})

function updateCount(dir){
    const count = document.getElementById("count")
    const currCount = +(count.innerText)

    if (dir == -1 && count.innerText == 1) return
    
    for (i=0; i < ingredients.length; i++){
        ingredients[i].innerText = (+(ingredients[i].innerText) / currCount) * (currCount + dir )
    }
    count.innerText = currCount + dir
}
