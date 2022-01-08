
let count = 0;
const countEl = document.querySelector('#count-el')
const decreaseBtn = document.querySelector('#decreaseBtn')
const resetBtn = document.querySelector('#resetBtn')
const increaseBtn = document.querySelector('#increaseBtn')

decreaseBtn.addEventListener('click', ()=>{
    count--
    hasCountZero()
})

increaseBtn.addEventListener('click', ()=>{
    count++
    hasCountZero()
})

resetBtn.addEventListener('click', ()=>{
    reset()
})

function hasCountZero(){
    if(count < 0){
        countEl.style.color = "red"
    } else if (count === 0){
        countEl.style.color = "black"
    } else {
        countEl.style.color = "green"
    }
    countEl.textContent = count;
}

function reset(){
    count = 0;
    hasCountZero()
}