const button = document.querySelector('.button')
const content = document.querySelector('.mainScreen')

function handel () {
    let getNumber =  window.prompt('Please enter how many boxes you want!!')
    content.style.display = 'grid'
    let gridColumns = '';
    for (let i = 0 ; i < +getNumber ; i++ ) {
        gridColumns += 'auto '
    }
    content.style.gridTemplateColumns = gridColumns

    while (content.firstChild) { //clear counter
        content.removeChild(content.firstChild);
      }
    for(let i = 0 ; i < +getNumber * +getNumber ;i++ ){
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class','styleDiv')
        content.appendChild(newDiv)
        newDiv.addEventListener('mouseenter', handelMove)
        newDiv.addEventListener('mouseleave',handelOut)
    }
}

function handelOut(e){
    setTimeout(() => {
        e.target.style.backgroundColor = '#ccc'
    },300)
}

function handelMove (e) {
    let randomDivColor = randomColor()
    e.toElement.style.backgroundColor = randomDivColor
}

function randomColor(){
    let color = "#";
    const randomHex = "0123456789ABCDEF";
    for(let i = 0; i < 6; i++){
        color+= randomHex[Math.floor(Math.random()*16)]
    }
    return color;
}

button.addEventListener('click', handel )